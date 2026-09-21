'use client';

import { useCallback, useEffect, useState } from 'react';

const BOARD_SIZE = 18;
const START_SNAKE = [{ x: 8, y: 9 }, { x: 7, y: 9 }, { x: 6, y: 9 }];
const START_DIRECTION = { x: 1, y: 0 };

type Point = { x: number; y: number };

function getFood(snake: Point[]): Point {
  const available: Point[] = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      if (!snake.some((segment) => segment.x === x && segment.y === y)) {
        available.push({ x, y });
      }
    }
  }
  return available[Math.floor(Math.random() * available.length)] ?? { x: 0, y: 0 };
}

export default function SnakePage() {
  const [snake, setSnake] = useState<Point[]>(START_SNAKE);
  const [food, setFood] = useState<Point>(() => getFood(START_SNAKE));
  const [direction, setDirection] = useState<Point>(START_DIRECTION);
  const [queuedDirection, setQueuedDirection] = useState<Point>(START_DIRECTION);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const restart = useCallback(() => {
    setSnake(START_SNAKE);
    setFood(getFood(START_SNAKE));
    setDirection(START_DIRECTION);
    setQueuedDirection(START_DIRECTION);
    setScore(0);
    setIsPlaying(true);
  }, []);

  const changeDirection = useCallback((next: Point) => {
    if (next.x + direction.x === 0 && next.y + direction.y === 0) return;
    setQueuedDirection(next);
  }, [direction]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const directions: Record<string, Point> = {
        ArrowUp: { x: 0, y: -1 },
        w: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        s: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        a: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const next = directions[event.key];
      if (next) {
        event.preventDefault();
        changeDirection(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [changeDirection]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setSnake((currentSnake) => {
        const nextDirection = queuedDirection;
        setDirection(nextDirection);
        const head = currentSnake[0];
        const nextHead = { x: head.x + nextDirection.x, y: head.y + nextDirection.y };
        const hitWall = nextHead.x < 0 || nextHead.x >= BOARD_SIZE || nextHead.y < 0 || nextHead.y >= BOARD_SIZE;
        const ateFood = nextHead.x === food.x && nextHead.y === food.y;
        const bodyToCheck = ateFood ? currentSnake : currentSnake.slice(0, -1);
        const hitBody = bodyToCheck.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);

        if (hitWall || hitBody) {
          setIsPlaying(false);
          return currentSnake;
        }

        const nextSnake = [nextHead, ...currentSnake];
        if (ateFood) {
          setScore((currentScore) => currentScore + 1);
          setFood(getFood(nextSnake));
          return nextSnake;
        }
        nextSnake.pop();
        return nextSnake;
      });
    }, 130);
    return () => window.clearInterval(timer);
  }, [food, isPlaying, queuedDirection]);

  return (
    <main className="snake-page">
      <div className="snake-shell">
        <a className="snake-back" href="/">Back to portfolio</a>
        <div className="snake-heading">
          <div>
            <p className="snake-kicker">Achievement unlocked</p>
            <h1>Snake Lab</h1>
            <p className="snake-copy">A tiny break between projects. Collect the green squares and beat your high score.</p>
          </div>
          <div className="snake-score" aria-label={`Score ${score}`}><span>Score</span><strong>{score.toString().padStart(2, '0')}</strong></div>
        </div>

        <div className="snake-board" style={{ '--board-size': BOARD_SIZE } as React.CSSProperties} aria-label="Snake game board" role="application">
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
            const point = { x: index % BOARD_SIZE, y: Math.floor(index / BOARD_SIZE) };
            const isHead = snake[0]?.x === point.x && snake[0]?.y === point.y;
            const isBody = snake.some((segment, segmentIndex) => segmentIndex > 0 && segment.x === point.x && segment.y === point.y);
            const isFood = food.x === point.x && food.y === point.y;
            return <div className={`snake-cell${isHead ? ' snake-head' : ''}${isBody ? ' snake-body' : ''}${isFood ? ' snake-food' : ''}`} key={`${point.x}-${point.y}`} />;
          })}
          {!isPlaying && <div className="snake-overlay"><strong>Game over</strong><button onClick={restart}>Play again</button></div>}
        </div>

        <div className="snake-controls" aria-label="Snake controls">
          <button onClick={() => changeDirection({ x: 0, y: -1 })} aria-label="Move up">Up</button>
          <div><button onClick={() => changeDirection({ x: -1, y: 0 })} aria-label="Move left">Left</button><button onClick={() => changeDirection({ x: 0, y: 1 })} aria-label="Move down">Down</button><button onClick={() => changeDirection({ x: 1, y: 0 })} aria-label="Move right">Right</button></div>
        </div>
        <button className="snake-restart" onClick={restart}>Restart game</button>
      </div>
      <style jsx>{`
        .snake-page { min-height: 100vh; padding: 32px 20px 56px; background: #f4f1e9; color: #17211c; font-family: Georgia, serif; }
        .snake-shell { width: min(100%, 720px); margin: 0 auto; }
        .snake-back { color: #56735c; font: 700 13px Arial, sans-serif; text-decoration: none; }
        .snake-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin: 52px 0 28px; }
        .snake-kicker { margin: 0 0 8px; color: #a95531; font: 700 12px Arial, sans-serif; letter-spacing: 1.5px; text-transform: uppercase; }
        h1 { margin: 0; font-size: clamp(42px, 9vw, 76px); line-height: .9; font-weight: 400; }
        .snake-copy { max-width: 390px; margin: 18px 0 0; color: #657067; font: 16px/1.5 Arial, sans-serif; }
        .snake-score { display: grid; gap: 4px; min-width: 92px; padding: 14px 16px; border: 1px solid #d2cdbd; background: #fffdf7; text-align: right; }
        .snake-score span { color: #9b8f7e; font: 700 11px Arial, sans-serif; text-transform: uppercase; letter-spacing: 1px; }
        .snake-score strong { font: 400 30px Georgia, serif; }
        .snake-board { position: relative; display: grid; grid-template-columns: repeat(var(--board-size), 1fr); width: min(100%, 560px); aspect-ratio: 1; margin: 0 auto; padding: 7px; border: 1px solid #c6c0ae; background: #dfe5d6; box-shadow: 12px 12px 0 #c9d2c0; }
        .snake-cell { border: 1px solid rgba(108, 127, 100, .08); }
        .snake-head, .snake-body { background: #456b4b; border: 2px solid #f0f2e5; }
        .snake-head { background: #244b38; }
        .snake-food { background: #c85c35; border-radius: 50%; transform: scale(.7); }
        .snake-overlay { position: absolute; inset: 0; display: grid; place-content: center; gap: 14px; background: rgba(23, 33, 28, .82); color: #fffdf7; text-align: center; }
        .snake-overlay strong { font-size: 30px; font-weight: 400; }
        button { cursor: pointer; border: 0; font: 700 12px Arial, sans-serif; text-transform: uppercase; letter-spacing: .7px; }
        .snake-overlay button, .snake-restart { padding: 12px 18px; background: #e9b949; color: #17211c; }
        .snake-controls { display: none; margin: 34px auto 0; text-align: center; }
        .snake-controls div { display: flex; justify-content: center; gap: 8px; margin-top: 8px; }
        .snake-controls button { width: 72px; height: 38px; background: #fffdf7; color: #456b4b; border: 1px solid #d2cdbd; }
        .snake-restart { display: block; margin: 30px auto 0; background: #456b4b; color: #fffdf7; }
        @media (max-width: 620px) { .snake-heading { align-items: start; flex-direction: column; margin-top: 42px; } .snake-score { align-self: end; margin-top: -8px; } .snake-controls { display: block; } }
      `}</style>
    </main>
  );
}
