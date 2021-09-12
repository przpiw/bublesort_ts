import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10,3,-5,0]);
const charactersCollection = new CharactersCollection('Xasasaa')
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-4)
linkedList.add(4);
linkedList.add(99)
linkedList.sort();
linkedList.print()
