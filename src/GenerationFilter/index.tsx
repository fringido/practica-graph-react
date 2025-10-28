import React from 'react';
import './styles.scss';

interface GenerationFilterProps {
    onGenerationChange: (generation: number) => void;
}

const GenerationFilter: React.FC<GenerationFilterProps> = ({ onGenerationChange }) => {
    const generations = [
        { number: 1, color: '#FF0000' },
        { number: 2, color: '#FF7F00' },
        { number: 3, color: '#FFFF00' },
        { number: 4, color: '#00FF00' },
        { number: 5, color: '#0000FF' },
        { number: 6, color: '#4B0082' },
        { number: 7, color: '#8F00FF' },
    ];

    return (
        <div className="generation-filter">
            {generations.map((gen) => (
                <button
                    key={gen.number}
                    className="generation-button"
                    style={{ backgroundColor: gen.color }}
                    onClick={() => onGenerationChange(gen.number)}
                >
                    {`Gen ${gen.number}`}
                </button>
            ))}
        </div>
    );
};

export default GenerationFilter;
