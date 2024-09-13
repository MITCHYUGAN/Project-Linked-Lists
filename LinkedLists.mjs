// Class ============================

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // Add another node to the end of the list
    append(value) {
        const node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    // Add another node to the beginning(head) of the list
    prepend(value) {
        const currentNode = this.head
        const node = new Node(value)

        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    // Return the size of the list
    size() {
        return this.length
    }

    // Returns the head node(first node in the list)
    heAd() {
        return this.head
    }

    // Returns the tail node(last node in the list)
    tAil() {
        return this.tail
    }

    // Get a node by it's index
    at(index) {
        if (index <= 0 || index >= this.length) {
            return null
        }

        let currentNode = this.head
        let currentIndex = 0

        while (currentIndex < index) {
            currentNode = currentNode.next
            currentIndex++
        }
        return currentNode;
    }

    // Remove last element from list
    pop() {
        if (this.head == null) {
            return null;
        } else {
            let prevNode = this.at(this.length - 2)
            this.tail = prevNode
            prevNode.next = null
            this.length--
        }

    }

    // returns true if the list contains the given value or false if not
    contains(value) {
        let currentNode = this.head
        while (currentNode) {
            if (value == currentNode.value) {
                return true
            }
            currentNode = currentNode.next
        }
        return false;
    }

    // returns the index of the node containing value
    find(value) {
        let currentNode = this.head
        let currentNodeIndex = 1

        while(currentNode){
            if(value == currentNode.value){
                return currentNodeIndex
            }
            currentNode = currentNode.next
            currentNodeIndex++
        }
        return null
    }

    // print out the whole list as a string
    toString() {
        if (this.head == null) {
            return null
        }

        let currentNode = this.head
        let output = ""

        for (let i = 0; i < this.length; i++) {
            output = output.concat(`(${currentNode.value}) -> `)
            currentNode = currentNode.next
        }

        output = output.concat("null")
        return output
    }
}

export default LinkedList