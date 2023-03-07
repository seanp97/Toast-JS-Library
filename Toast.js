class Toast {

    CloseToast() {
        this._allToasts = document.querySelectorAll('.toast span');
        this._allToasts.forEach(el => {
           el.addEventListener('click', () => {
                el.parentElement.remove();
                this.ToastOverlap();
           });
        });
    }

    ToastOverlap() {
        this._toastLength = document.querySelectorAll('.toast').length;
        if(this._toastLength > 1) {
            this._topStart = 90;
            for(let i = 1; i < this._toastLength; i++) {
                document.querySelector(`.toast:nth-of-type(${i})`).style.top = `${this._topStart}px`;
                this._offsetHeight = document.querySelector(`.toast:nth-of-type(${i})`).offsetHeight;
                this._topStart += this._offsetHeight + 15;
            }
        }
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
            this._toastAll = document.querySelectorAll('.toast-success');
            this._toastAll.forEach(toastEl => {
                toastEl.classList.add('slide-out');
            });

        }, this._timeoutSuccess);

        setTimeout(() => {
            this._toastAllRem = document.querySelectorAll('.toast-success');
            this._toastAllRem.forEach(remEl => {
                remEl.remove();
            });
        }, this._timeoutSuccess + 900);

        this.CloseToast();
        this.ToastOverlap();
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
            this._toastAll = document.querySelectorAll('.toast-error');
            this._toastAll.forEach(toastEl => {
                toastEl.classList.add('slide-out');
            });

        }, this._timeoutError);

        setTimeout(() => {
            this._toastAllRem = document.querySelectorAll('.toast-error');
            this._toastAllRem.forEach(remEl => {
                remEl.remove();
            });
        }, this._timeoutError + 900);

        this.CloseToast();
        this.ToastOverlap();
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
            this._toastAll = document.querySelectorAll('.toast-danger');
            this._toastAll.forEach(toastEl => {
                toastEl.classList.add('slide-out');
            });

        }, this._timeoutDanger);

        setTimeout(() => {
            this._toastAllRem = document.querySelectorAll('.toast-danger');
            this._toastAllRem.forEach(remEl => {
                remEl.remove();
            });
        }, this._timeoutDanger + 900);

        this.CloseToast();
        this.ToastOverlap();
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
            this._toastAll = document.querySelectorAll('.toast-info');
            this._toastAll.forEach(toastEl => {
                toastEl.classList.add('slide-out');
            });

        }, this._timeoutInfo);

        setTimeout(() => {
            this._toastAllRem = document.querySelectorAll('.toast-info');
            this._toastAllRem.forEach(remEl => {
                remEl.remove();
            });
        }, this._timeoutInfo + 900);

        this.CloseToast();
        this.ToastOverlap();
    }

}
