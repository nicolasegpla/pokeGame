import './primary-button.scss';

interface PrimaryButtonProps {
    textButton: string;
    onClick: () => void;
}

export function PrimaryButton({ textButton = 'Primary Button', onClick }: PrimaryButtonProps) {
    return (
        <button className="primary-button" onClick={onClick}>
            {textButton}
        </button>
    );
}
