
class Common {
    static getData = (key) => {
        return JSON.parse(localStorage.getItem(key)) ?? [];
    };
    static saveData = (key,value) => {
        localStorage.setItem(key,JSON.stringify(value));
    }

    static isUserLoggedIn(){
        return JSON.parse(localStorage.getItem('loggedUser'));
    }

    static logoutUser(){
        localStorage.removeItem('loggedUser');
        window.location.href="../signInPage.html"
    }

}