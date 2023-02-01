import React from 'react';
import styled from 'styled-components';
import Images from '../Images';

const QuizResultsOptions = ({results}) => {
  return(
    <ReactResultContainer className="quiz-result">
        <h2>Score Details...</h2>
        {
            results.map((quest, index)=>{
       			return <div className="quiz-result__wrap" key={index} data-num={index+1+'.'}>
            		<h3 className="quiz-result__title">{quest.question}</h3>
                    <ul className="quiz-result__quest.options">
                    {quest.options.map((option, index) => (
                        <li
                        key={index}
                        className={`quiz-result__option ${
                            quest.options[index].correct && quest.options[index].u_score ? 'quiz-result__option--correct' : quest.options[index].correct && !quest.options[index].u_score ? 'quiz-result__option--correct' : !quest.options[index].correct && quest.options[index].u_score ? 'quiz-result__option--fail': ''
                        }`}
                        >
                        {quest.options[index].option}
                        </li>
                    ))}
                    </ul>
                </div>
			})
        }
    </ReactResultContainer>
  )
};

export default QuizResultsOptions;


const ReactResultContainer = styled.div`
    max-width: 800px;
    margin: 0px auto;

    h2{
        font-size: 2em;
        margin-top: 50px;
        margin-bottom: 0px;
        line-height: 150%;
    }

    .quiz-result__wrap{
        border-bottom: var(--borderDefault);
        padding: 50px;
        position: relative;
    }
    .quiz-result__wrap::before{
        content: attr(data-num);
        font-family: var(--Montserat);
        position: absolute;
        left: -4px;
        font-size: 1.1em;
        font-weight: 600;
    }
    .quiz-result__title {
    font-size: 1.1em;
    margin-bottom: 20px;
    line-height: 150%;
    text-transform: inherit;
    font-weight: 600;
    }

    .quiz-result__quest.options {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    }

    .quiz-result__option {
        font-size: 1em;
        margin-bottom: 10px;
        margin-left: 30px;
    }

    .quiz-result__option--correct {
        position: relative;
        font-weight: bold;
        color: var(--DarkCyan);
    }
    .quiz-result__option--fail {
        position: relative;
        font-weight: bold;
        color: var(--TurkishRose);
    }
    .quiz-result__option--correct::before,
    .quiz-result__option--fail::before {
        content: url(${Images.check.default});
        width: 24px;
        height: 24px;
        position: absolute;
        left: -30px;
    }
    .quiz-result__option--fail::before {
        content: url(${Images.cancel.default});
    }

`;