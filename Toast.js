class Toast {

    CloseToast() {
        document.querySelector('.toast span').addEventListener('click', () => {
            document.querySelector('.toast span').parentElement.remove();
        });
    }

    Success(text, timeout = 5000) {
        this._successText = text;
        this._timeoutSuccess = timeout;

        document.body.innerHTML += `
            <div class="toast toast-success">
                <span>&#10005;</span>
                <h3>${this._successText}</h3>
            </div>
        `;

        setTimeout(() => {
            document.querySelector('.toast-success').classList.add('slide-out');
        }, this._timeoutSuccess);

        setTimeout(() => {
            document.querySelector('.toast-success').remove();
        }, this._timeoutSuccess + 900);

        this.CloseToast();
    }

    Error(text, timeout = 5000) {
        this._errorText = text;
        this._timeoutError = timeout;

        document.body.innerHTML += `
            <div class="toast toast-error">
                <span>&#10005;</span>
                <h3>${this._errorText}</h3>
            </div>
        `;

        setTimeout(() => {
            document.querySelector('.toast-error').classList.add('slide-out');
        }, this._timeoutError);

        setTimeout(() => {
            document.querySelector('.toast-error').remove();
        }, this._timeoutError + 900);

        this.CloseToast();
    }

    Danger(text, timeout = 5000) {
        this._dangerText = text;
        this._timeoutDanger = timeout;

        document.body.innerHTML += `
            <div class="toast toast-danger">
                <span>&#10005;</span>
                <h3>${this._dangerText}</h3>
            </div>
        `;

        setTimeout(() => {
            document.querySelector('.toast-danger').classList.add('slide-out');
        }, this._timeoutDanger);

        setTimeout(() => {
            document.querySelector('.toast-danger').remove();
        }, this._timeoutDanger + 900);

        this.CloseToast();
    }

    Info(text, timeout = 5000) {
        this._infoText = text;
        this._timeoutInfo = timeout;

        document.body.innerHTML += `
            <div class="toast toast-info">
                <span>&#10005;</span>
                <h3>${this._infoText}</h3>
            </div>
        `;

        setTimeout(() => {
            document.querySelector('.toast-info').classList.add('slide-out');
        }, this._timeoutInfo);

        setTimeout(() => {
            document.querySelector('.toast-info').remove();
        }, this._timeoutInfo + 900);

        this.CloseToast();
    }

}