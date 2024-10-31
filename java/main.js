let carrinho = [];
let total = 0;


function atualizarCarrinho() {
    const carrinhoList = document.getElementById('carrinho-list');
    carrinhoList.innerHTML = ''; 


    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} `;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => {
            removerItem(index);
        };
        li.appendChild(removeBtn);
        carrinhoList.appendChild(li);
    });


    document.getElementById('total').textContent = total.toFixed(2);
}


function adicionarItem(nome, preco) {
    carrinho.push({ nome, preco: parseFloat(preco) });
    total += parseFloat(preco);
    atualizarCarrinho();
}


function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1); 
    atualizarCarrinho();
}


document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const menuItem = event.target.closest('.menu-item');
        const nome = menuItem.getAttribute('data-nome');
        const preco = menuItem.getAttribute('data-preco');
        adicionarItem(nome, preco);
    });
});