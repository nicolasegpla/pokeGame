import './counter.scss';

interface counterProps {
    credits: number;
    title: string;
}

export function Counter({ credits = 0, title = 'Title Counter' }: counterProps) {
    return (
        <div className="counter">
            <span className="counter__title">{title}</span>
            <p className="counter__credits">{credits}</p>
        </div>
    );
}
