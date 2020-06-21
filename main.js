class List {
    constructor(){
        this.data = [];
    }

    add(a){
        this.data.push(a);
    }
}

class TodoList extends List {
    constructor(){
        super();
    }

}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = () => {
    minhaLista.add('Novo todo');
    console.log(minhaLista);
};