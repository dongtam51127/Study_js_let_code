function xl(diem) {
    if (diem < 6) {
        console.log('yếu')
    }
    else if (diem > 9) {
        console.log('suất xắt')
    }
    else if (diem > 8) {
        console.log('giỏi')
    } else if (diem > 7) {
        console.log('khá')
    }
    else if (diem === 6) {
        console.log('tb')

    }
}

let diem = 2
xl(diem)





let lopHoc = [
    { ten: "Hoa", tuoi: 15, gioiTinh: "Nữ" },
    { ten: "Tuan", tuoi: 17, gioiTinh: "Nam" },
    { ten: "Lan", tuoi: 18, gioiTinh: "Nữ" },
    { ten: "Minh", tuoi: 19, gioiTinh: "Nam" },
    { ten: "An", tuoi: 20, gioiTinh: "Nam" },
    { ten: "Hoài", tuoi: 18, gioiTinh: "Nam" },
    { ten: "Nam", tuoi: 16, gioiTinh: "Nam" },
    { ten: "Phước", tuoi: 15, gioiTinh: "Nam" }
];

for (let i = 0; i < lopHoc.length; i++) {
    if (lopHoc[i].tuoi === 18) {
        console.log(lopHoc[i])
    }
}

for (let aa = 0; aa < lopHoc.length; aa++) {
    if (lopHoc[aa].gioiTinh === 'Nam') {
        console.log(lopHoc[aa])
    }
}


let cr=20
let cd=60
function a(cr,cd) {
   let dientich= cr * cd
   let chuvi= (cr+cd)*2
   console.log('diện tích : ',dientich)
   console.log('chu vi : ',chuvi)
}
a(cr,cd)