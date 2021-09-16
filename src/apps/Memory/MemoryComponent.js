import React, { useEffect, useState } from "react";
import { CardComponent } from "./CardComponet";
import OneCard from "./ChairOfR/OneCard";
import GoodCards from "./ChairOfR/GoodCards";
import TwoCard from "./ChairOfR/TwoCard";
import { createBoard } from "./createBoard";
import "./styles.css";

let list = [];
let twice = [];

let oneCard = new OneCard();
let twoCard = new TwoCard();
let goodCard = new GoodCards();
oneCard.setNext(twoCard);
twoCard.setNext(goodCard);
export const MemoryComponent = () => {
    useEffect(() => {
        list = createBoard(20);
        setStateBoard(list);
        console.log(list);
    }, []);
    const [stateBoard, setStateBoard] = useState(list);
    const handleClick = ({ id }) => {
        if (twice.length == 2){
            twice = [];
        }
        const item = stateBoard.find((item) => item.id === id);
        oneCard.process(twice, item,  stateBoard, setStateBoard);
//        if (twice.length == 0) {
//            twice = [...tiwce, item];
//        }else if(twice.length === 1){
//            twice = [...twice, item];
//            const [item1] = twice;
//            if(item1.key !== item.key){
//                console.log("son diferentes");
//                //funcion enbase al tiempo para dar la vuela las cartas
//                setTimeout(() => {
//                    const newStateBoard = stateBoard.map(item =>{
//                        if(item.done === false){
//                            item.state = false;
//                            item.styles = "item";
//                        }
//                        return item;
//                   });
//                    setStateBoard(newStateBoard);
//                }, 1000);
//            } else {
//                const [item1, item2] = twice;
//                const newStateBoard = stateBoard.map((item) =>{
//                    if(item.id === item1.id || item.id === item2.id){
//                        item.done = true;
//                        item.styles = "item";
//                   }
//                });
//                setStateBoard(newStateBoard);
//                return item;
//            }
//        }
//        const newStateBoard = stateBoard.map((item) => {
//            if (item.id === id) {
//                item.state = true;
//                item.styles = "itemColor";
//            }
//            return item;
//        });
//        setStateBoard(newStateBoard);
    };
    return (
        <div>
            <h1>Memory app</h1>
            <hr />
            <div className="container">{
                stateBoard.map((item) => (
                    <CardComponent 
                        key = {item.id} 
                        item = {item}
                        handleClick ={handleClick}
                    />
            ))}
            </div>
        </div>   
           
    );
};
