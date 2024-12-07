import Button from "../button";
import Watch from "./watch";
import style from './stopwatch.module.scss';
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Stopwatch({ selected, finishTask }: Props) {
    const [time, setTime] = useState<number>();
    useEffect(() => {
        if (selected?.time)
            setTime(timeToSeconds(selected.time));
    }, [selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            finishTask();
        }, 1000);
    };

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Chose a card and start the stopwatch</p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Start!
            </Button>
        </div>
    )
    
}