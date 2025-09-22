class CrashGame {
    constructor() {
        this.balance = 10000;
        this.betAmount = 0;
        this.currentMultiplier = 1.00;
        this.isPlaying = false;
        this.crashPoint = 0;
        this.history = [];
        this.intervalId = null;

        this.multiplierDisplay = document.getElementById('multiplier');
        this.balanceDisplay = document.getElementById('balance');
        this.betAmountInput = document.getElementById('betAmount');
        this.placeBetButton = document.getElementById('placeBet');
        this.cashoutButton = document.getElementById('cashout');
        this.historyList = document.getElementById('historyList');

        this.placeBetButton.addEventListener('click', () => this.placeBet());
        this.cashoutButton.addEventListener('click', () => this.cashout());
    }

    placeBet() {
        const bet = parseInt(this.betAmountInput.value);
        if (isNaN(bet) || bet <= 0) {
            alert('Please enter a valid bet amount');
            return;
        }
        if (bet > this.balance) {
            alert('Insufficient balance');
            return;
        }

        this.betAmount = bet;
        this.balance -= bet;
        this.updateBalance();
        this.isPlaying = true;
        this.placeBetButton.disabled = true;
        this