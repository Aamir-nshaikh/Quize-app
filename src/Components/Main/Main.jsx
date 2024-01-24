import React, { useEffect, useMemo, useState } from 'react'
import './main.css'
import Trivia from '../Trivia/Trivia.jsx'
import Timer from '../Timer.jsx'
import Start from '../Start.jsx'

const Main = () => {
    const [username, setUserName] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState(" Rs 0");

    const data = [
        {
            id: 1,
            question: "Rolex is a company that specializes in what type of product?",
            answers: [
                {
                    text: "Phone",
                    correct: false,
                },
                {
                    text: "Watches",
                    correct: true,
                },
                {
                    text: "Food",
                    correct: false,
                },
                {
                    text: "Cosmetic",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "When did the website `Facebook` launch?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },
        {
            id: 3,
            question: "Who played the character of harry potter in movie?",
            answers: [
                {
                    text: "Johnny Deep",
                    correct: false,
                },
                {
                    text: "Leonardo Di Caprio",
                    correct: false,
                },
                {
                    text: "Denzel Washington",
                    correct: false,
                },
                {
                    text: "Daniel Red Cliff",
                    correct: true,
                },
            ],
        },
        {
            id: 4,
            question: "What is the largest internal organ in the human body?",
            answers: [
                {
                    text: "Lungs ",
                    correct: false,
                },
                {
                    text: "Heart",
                    correct: false,
                },
                {
                    text: "Kidneys",
                    correct: false,
                },
                {
                    text: "Liver",
                    correct: true,
                },
            ],
        },
        {
            id: 5,
            question: "What was the name of Drake’s 2023 album?",
            answers: [
                {
                    text: "Take Care ",
                    correct: false,
                },
                {
                    text: "Scorpion",
                    correct: false,
                },
                {
                    text: "For All the Dogs",
                    correct: true,
                },
                {
                    text: "Views",
                    correct: false,
                },
            ],
        },
        {
            id: 6,
            question: "What is the atomic number of Hydrogen?",
            answers: [
                {
                    text: "3 ",
                    correct: false,
                },
                {
                    text: "2",
                    correct: false,
                },
                {
                    text: "1",
                    correct: true,
                },
                {
                    text: "4",
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: "Which one of the following scientists invented the World Wide Web?",
            answers: [
                {
                    text: "Tim Berners-Lee ",
                    correct: true,
                },
                {
                    text: "Stephen Hawking",
                    correct: false,
                },
                {
                    text: "Alan Turing",
                    correct: false,
                },
                {
                    text: "James D. Watson",
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question: "How long is the border between the United States and Canada?",
            answers: [
                {
                    text: "3525 miles ",
                    correct: false,
                },
                {
                    text: "4525 miles",
                    correct: false,
                },
                {
                    text: "5525 miles",
                    correct: true,
                },
                {
                    text: "6525 miles",
                    correct: false,
                },
            ],
        },
        {
            id: 9,
            question: "What is the largest active volcano in the world?",
            answers: [
                {
                    text: "Mount Etna",
                    correct: false,
                },
                {
                    text: "Mouna Loa",
                    correct: true,
                },
                {
                    text: " Mount Vesuvius ",
                    correct: false,
                },
                {
                    text: "Mount Batur",
                    correct: false,
                },
            ],
        },
        {
            id: 10,
            question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
            answers: [
                {
                    text: "Le Louvre ",
                    correct: true,
                },
                {
                    text: "Uffizi Museum",
                    correct: false,
                },
                {
                    text: "British Museum",
                    correct: false,
                },
                {
                    text: "Metropolitan Museum of Art",
                    correct: false,
                },
            ],
        },
        {
            id: 11,
            question: "In which city can you find the Prado Museum?",
            answers: [
                {
                    text: "Buenos Aires ",
                    correct: false,
                },
                {
                    text: "Barcelona",
                    correct: false,
                },
                {
                    text: "Santiago",
                    correct: false,
                },
                {
                    text: "Madrid",
                    correct: true,
                },
            ],
        },
        {
            id: 12,
            question: "Which famous inventor invented the telephone?",
            answers: [
                {
                    text: "Thomas Edison ",
                    correct: false,
                },
                {
                    text: "Benjamin Franklin",
                    correct: false,
                },
                {
                    text: "Alexander Graham Bell",
                    correct: true,
                },
                {
                    text: "Nikola Tesla",
                    correct: false,
                },
            ],
        },
        {
            id: 13,
            question: "Which artist and author made the Smurfs comic strips?",
            answers: [
                {
                    text: "Hergé ",
                    correct: false,
                },
                {
                    text: "Peyo",
                    correct: true,
                },
                {
                    text: "Morris",
                    correct: false,
                },
                {
                    text: "Edgar P. Jacobs",
                    correct: false,
                },
            ],
        },
        {
            id: 14,
            question: "What is the longest river in the world?",
            answers: [
                {
                    text: "Amazon River ",
                    correct: false,
                },
                {
                    text: "Nile",
                    correct: true,
                },
                {
                    text: "Yellow River",
                    correct: false,
                },
                {
                    text: "Congo River",
                    correct: false,
                },
            ],
        },
        {
            id: 15,
            question: "When was the first Harry Potter book published?",
            answers: [
                {
                    text: "1997 ",
                    correct: true,
                },
                {
                    text: "1999",
                    correct: false,
                },
                {
                    text: "2001",
                    correct: false,
                },
                {
                    text: "2003",
                    correct: false,
                },
            ],
        },
    ];
    const moneyPyramid = useMemo(() =>
        [
            { id: 1, amount: ' Rs 5000' },
            { id: 2, amount: 'Rs 10000' },
            { id: 3, amount: 'Rs 20000' },
            { id: 4, amount: 'Rs 30000' },
            { id: 5, amount: 'Rs 50000' },
            { id: 6, amount: 'Rs 100000' },
            { id: 7, amount: 'Rs 500000' },
            { id: 8, amount: 'Rs 1500000' },
            { id: 9, amount: 'Rs 2500000' },
            { id: 10, amount: 'Rs 3000000' },
            { id: 11, amount: 'Rs 4000000' },
            { id: 12, amount: 'Rs 5000000' },
            { id: 13, amount: 'Rs 6000000' },
            { id: 14, amount: 'Rs 7500000' },
            { id: 15, amount: 'Rs 10000000' },

        ].reverse(),
        []);

    useEffect(() => {
        questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
    }, [moneyPyramid, questionNumber])

    useEffect( ()=> {
        questionNumber > 14 && setEarned(moneyPyramid.find(m => m.id === questionNumber -1).amount) 
    }, [moneyPyramid,questionNumber])
    return (
        <div className='container'>
            {username ? (
                <>
                    <div className='main'>
                        {stop ? <h1 className='endText'>You earned: {earned} </h1> : (
                            <>
                                <div className='top'>
                                    <div className='timer'>

                                        <Timer setStop={setStop} questionNumber={questionNumber} />
                                    </div>
                                </div>
                                <div className='bottom'>
                                    <Trivia data={data}
                                        setTimeOut={setStop}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber} />
                                </div>
                            </>
                        )}

                    </div>
                    <div className='money'>
                        <ul className='moneyList'>
                            {moneyPyramid.map((m) => (
                                <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
                                    <span className='moneyListItemNumber'>{m.id}</span>
                                    <span className='moneyListItemAmount'>{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : <Start setUserName={setUserName} />}

        </div>

    )
}

export default Main