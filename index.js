import React, { useState } from "react";
import classes from "./style.css";

export default function ReactCustomSlider({ images, sliderBg = "#000000", paginationBg = "#000000"}) {
    const [x, setX] = useState(0);
    const [activeCount, setActiveCount] = useState(0);

    const slidesCount = images.length;

    const moveLeft = () => {
        if (x === 0) {
        setX(-100 * (slidesCount - 1));
        setActiveCount(slidesCount - 1);
        } else {
        setX(x + 100);
        setActiveCount((prevCount) => prevCount - 1);
        }
    };

    const moveRight = () => {
        if (x === -100 * (slidesCount - 1)) {
        setX(0);
        setActiveCount(0);
        } else {
        setX(x - 100);
        setActiveCount((prevCount) => prevCount + 1);
        }
    };

    return (<div className={classes.slider} style={{ backgroundColor: sliderBg}}>
                <div className={classes.slidesContainer}>
                {images.map((data, index) => {
                    return (
                        <div 
                        style={{ transform: `translateX(${x}%)` }} 
                        key={index}
                        className={classes.slides}
                        >
                            <img 
                                src={data} 
                                width="100%" 
                            />
                        </div>
                    );
                })}
                </div>
                <div className={classes.sliderNavigation} style={{backgroundColor: paginationBg}}>
                    <img onClick={moveLeft} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzcsMCwwLDExNC44MzcsMCwyNTZzMTE0LjgzNywyNTYsMjU2LDI1NnMyNTYtMTE0LjgzNywyNTYtMjU2UzM5Ny4xNjMsMCwyNTYsMHogTTMxMy43NDksMzQ3LjU4NCAgICBjOC4zNDEsOC4zNDEsOC4zNDEsMjEuODI0LDAsMzAuMTY1Yy00LjE2LDQuMTYtOS42MjEsNi4yNTEtMTUuMDgzLDYuMjUxYy01LjQ2MSwwLTEwLjkyMy0yLjA5MS0xNS4wODMtNi4yNTFMMTc2LjkxNywyNzEuMDgzICAgIGMtOC4zNDEtOC4zNDEtOC4zNDEtMjEuODI0LDAtMzAuMTY1bDEwNi42NjctMTA2LjY2N2M4LjM0MS04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDBzOC4zNDEsMjEuODI0LDAsMzAuMTY1TDIyMi4xNjUsMjU2ICAgIEwzMTMuNzQ5LDM0Ny41ODR6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                    <div>
                        {images.map((_, index) => (
                        <span
                            key={index}
                            className={index === activeCount ? classes.active : classes.inActive}
                        ></span>
                        ))}
                    </div>
                    <img onClick={moveRight} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KC0xLC0xLjIyNDY0Njc5OTE0NzM1MzJlLTE2LDEuMjI0NjQ2Nzk5MTQ3MzUzMmUtMTYsLTEsNTEyLDUxMikiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzcsMCwwLDExNC44MzcsMCwyNTZzMTE0LjgzNywyNTYsMjU2LDI1NnMyNTYtMTE0LjgzNywyNTYtMjU2UzM5Ny4xNjMsMCwyNTYsMHogTTMxMy43NDksMzQ3LjU4NCAgICBjOC4zNDEsOC4zNDEsOC4zNDEsMjEuODI0LDAsMzAuMTY1Yy00LjE2LDQuMTYtOS42MjEsNi4yNTEtMTUuMDgzLDYuMjUxYy01LjQ2MSwwLTEwLjkyMy0yLjA5MS0xNS4wODMtNi4yNTFMMTc2LjkxNywyNzEuMDgzICAgIGMtOC4zNDEtOC4zNDEtOC4zNDEtMjEuODI0LDAtMzAuMTY1bDEwNi42NjctMTA2LjY2N2M4LjM0MS04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDBzOC4zNDEsMjEuODI0LDAsMzAuMTY1TDIyMi4xNjUsMjU2ICAgIEwzMTMuNzQ5LDM0Ny41ODR6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                </div>
        </div>)
}