var obj = {
    x : 1,
    getX : function() {
        x = 2;
        console.log('This is ' + this.x);

        function getX () {
            x = 3;
            console.log('This is now ' + this.x);

            function getX () {
                x = 4;
                console.log('This is now ' + this.x);
            }
            getX();
        }
        getX();
    }
}

obj.getX();

console.log("____\n");

var obj1 = {
    x : 1,
    getX : function() {
        self = this;
        console.log('This is ' + self.x);

        function getX () {
            x = 3;
            console.log('This is now ' + self.x);

            function getX () {
                x = 4;
                console.log('This is now ' + self.x);
            }
            getX();

        }
        getX();
    }
}

obj1.getX();