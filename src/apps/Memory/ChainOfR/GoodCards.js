import LogicGame from "./LogicGame";

class GoodCards extends LogicGame {
    process(twice, item, stateBoard, setStateBoard){
    const [item1, item2] = twice;
    const newStateBoard = stateBoard.map((item) => {
        if (item === item1 || item === item2) {
            item.done = true;
        }
        return item;
    });
    setStateBoard(newStateBoard);
    }

}

export default GoodCards;
