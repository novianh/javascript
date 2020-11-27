//  Execution Context, Hoisting & Scope
// hoisting menaikkan variabel dan function ke atas


function a() {
    console.log('ini a');

    function b() {
        console.log('ini b');

        function c() {
            console.log('ini c');
        }

        c();
    }
    b();
}
a();