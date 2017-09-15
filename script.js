function Die() {
    this.div = document.createElement("div");
    this.div.className = "die";
    thid.div.addEventListener("click", this.roll.bind(this));
    this.roll();
    document.body.appendChild(this.div);
}

die.prototype.roll = function() {
    this.value = Math.ceil(Math.random() *6 );
    this.div.innerHTML = this.value;
}

Die.prototype.removeDie = function() {
    this.div.remove();

    
}

document.getElementById("generate-button").addEventListener("click", function() {
    var d = new Die();
})

document.getElementById("roll-button").addEventListener("click", function() {
    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].roll()
    }
})