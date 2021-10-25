let yourName = "Nidhi Deshpande";

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Ginger bread
let cc = 0;      // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('credit').textContent = `Created by ${yourName}`;

    function updateTable(rowId, qty) {
        document.getElementById(rowId).textContent = qty;
    };
    function increment(cookie, qty) {
        return cookie += qty;
    };
    function decrement(cookie, qty) {
        return (cookie === 0) ? 0 : (cookie -= qty);
    };
    function total() {
        return gb+cc+sugar;
    }

    document.getElementById('add-gb').addEventListener('click', function() {
        console.log('Gingerbread + button was clicked!');
            
                // When I click the plus button what should happen?
                // 1: Icrement gingerbread total by 1
                gb = increment(gb, 1);
                // 2: update the gingerbread table in the DOM
                updateTable ('qty-gb', gb);
                updateTable('qty-total', total());
    });

    document.getElementById('minus-gb').addEventListener('click', function() {
        console.log('Gingerbread - button was clicked!');
            
                // When I click the plus button what should happen?
                // 1: Icrement gingerbread total by 1
                gb = decrement(gb, 1);
                updateTable ('qty-gb', gb);
                updateTable('qty-total', total());
    });

    document.getElementById('add-cc').addEventListener('click', function() {
        console.log('Gingerbread + button was clicked!');
            
                // When I click the plus button what should happen?
                // 1: Icrement gingerbread total by 1
                cc = increment(cc, 1);
                // 2: update the gingerbread table in the DOM
                updateTable ('qty-cc', cc);
                updateTable('qty-total', total());
    });

    document.getElementById('minus-cc').addEventListener('click', function() {
        console.log('Gingerbread - button was clicked!');
            
                // When I click the plus button what should happen?
                // 1: Icrement gingerbread total by 1
                cc = decrement(cc, 1);
                updateTable ('qty-cc', cc);
                updateTable('qty-total', total());
    });

    document.getElementById('add-sugar').addEventListener('click', function() {
        console.log('Gingerbread + button was clicked!');
            
                // When I click the plus button what should happen?
                // 1: Icrement gingerbread total by 1
                sugar = increment(sugar, 1);
                // 2: update the gingerbread table in the DOM
                updateTable ('qty-sugar', sugar);
                updateTable('qty-total', total());
    });

    document.getElementById('minus-sugar').addEventListener('click', function() {
        console.log('Gingerbread - button was clicked!');
            
                // When I click the plus button what should happen?
                // 1: Icrement gingerbread total by 1
                sugar = decrement(sugar, 1);
                updateTable ('qty-sugar', sugar);
                updateTable('qty-total', total());
    });
});