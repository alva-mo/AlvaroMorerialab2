import LogicGame from "./LogicGame";

class OneCard extends LogicGame {
    process(twice, item){
        if (twice.item == 0) {
            twice = [...twice, item];
        } else {
            this.next.process(twice, item);
        }

    }
}

export default LogicGame;