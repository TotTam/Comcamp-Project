let data;
fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces").then(e => e.json()).then(e => data = e)
fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all").then(e => e.json()).then(e => {
    let datad = e[0];
    document.getElementById('TN').innerHTML = datad.new_case;
    document.getElementById('TC').innerHTML = datad.total_case;
    document.getElementById('TD').innerHTML = datad.total_death;
});

const enToTh = {"Bangkok_Metropolis":"กรุงเทพมหานคร","Krabi":"กระบี่","Kanchanaburi":"กาญจนบุรี","Kalasin":"กาฬสินธุ์","Kamphaeng_Phet":"กำแพงเพชร","Khon_Kaen":"ขอนแก่น","Chanthaburi":"จันทบุรี","Chachoengsao":"ฉะเชิงเทรา","Chon_Buri":"ชลบุรี","Chai_Nat":"ชัยนาท","Chaiyaphum":"ชัยภูมิ","Chumphon":"ชุมพร","Chiang_Rai":"เชียงราย","Chiang_Mai":"เชียงใหม่","Trang":"ตรัง","Trat":"ตราด","Tak":"ตาก","Nakhon_Nayok":"นครนายก","Nakhon_Pathom":"นครปฐม","Nakhon_Phanom":"นครพนม","Nakhon_Ratchasima":"นครราชสีมา","Nakhon_Si_Thammarat":"นครศรีธรรมราช","Nakhon_Sawan":"นครสวรรค์","Nonthaburi":"นนทบุรี","Narathiwat":"นราธิวาส","Nan":"น่าน","Bueng_Kan":"บึงกาฬ","Buri_Ram":"บุรีรัมย์","Pathum_Thani":"ปทุมธานี","Prachuap_Khiri_Khan":"ประจวบคีรีขันธ์","Prachin_Buri":"ปราจีนบุรี","Pattani":"ปัตตานี","Phra_Nakhon_Si_Ayutthaya":"พระนครศรีอยุธยา","Phayao":"พะเยา","Phangnga":"พังงา","Phatthalung":"พัทลุง","Phichit":"พิจิตร","Phitsanulok":"พิษณุโลก","Phetchaburi":"เพชรบุรี","Phetchabun":"เพชรบูรณ์","Phrae":"แพร่","Phuket":"ภูเก็ต","Maha_Sarakham":"มหาสารคาม","Mukdahan":"มุกดาหาร","Mae_Hong_Son":"แม่ฮ่องสอน","Yasothon":"ยโสธร","Yala":"ยะลา","Roi_Et":"ร้อยเอ็ด","Ranong":"ระนอง","Rayong":"ระยอง","Ratchaburi":"ราชบุรี","Lop_Buri":"ลพบุรี","Lampang":"ลำปาง","Lamphun":"ลำพูน","Loei":"เลย","Si_Sa_Ket":"ศรีสะเกษ","Sakon_Nakhon":"สกลนคร","Songkhla":"สงขลา","Satun":"สตูล","Samut_Prakan":"สมุทรปราการ","Samut_Songkhram":"สมุทรสงคราม","Samut_Sakhon":"สมุทรสาคร","Sa_Kaeo":"สระแก้ว","Saraburi":"สระบุรี","Sing_Buri":"สิงห์บุรี","Sukhothai":"สุโขทัย","Suphan_Buri":"สุพรรณบุรี","Surat_Thani":"สุราษฎร์ธานี","Surin":"สุรินทร์","Nong_Khai":"หนองคาย","Nong_Bua_Lam_Phu":"หนองบัวลำภู","Ang_Thong":"อ่างทอง","Amnat_Charoen":"อำนาจเจริญ","Udon_Thani":"อุดรธานี","Uttaradit":"อุตรดิตถ์","Uthai_Thani":"อุทัยธานี","Ubon_Ratchathani":"อุบลราชธานี"};

let provinceId = ['Mae_Hong_Son', 'Chumphon', 'Nakhon_Si_Thammarat', 'Phuket', 'Phangnga', 'Ranong', 'Surat_Thani', 'Krabi', 'Phatthalung', 'Satun', 'Songkhla', 'Trang', 'Yala', 'Chiang_Rai', 'Chiang_Mai', 'Lampang', 'Lamphun', 'Nan', 'Phayao', 'Phrae', 'Phitsanulok', 'Sukhothai', 'Uttaradit', 'Kanchanaburi', 'Kamphaeng_Phet', 'Phichit', 'Phetchabun', 'Suphan_Buri', 'Tak', 'Uthai_Thani', 'Ang_Thong', 'Chai_Nat', 'Lop_Buri', 'Nakhon_Nayok', 'Prachin_Buri', 'Nakhon_Sawan', 'Phra_Nakhon_Si_Ayutthaya', 'Pathum_Thani', 'Sing_Buri', 'Saraburi', 'Bangkok_Metropolis', 'Nonthaburi', 'Nakhon_Pathom', 'Phetchaburi', 'Prachuap_Khiri_Khan', 'Ratchaburi', 'Samut_Prakan', 'Samut_Sakhon', 'Samut_Songkhram', 'Si_Sa_Ket', 'Ubon_Ratchathani', 'Amnat_Charoen', 'Yasothon', 'Chon_Buri', 'Chachoengsao', 'Chanthaburi', 'Sa_Kaeo', 'Rayong', 'Trat', 'Buri_Ram', 'Chaiyaphum', 'Khon_Kaen', 'Kalasin', 'Maha_Sarakham', 'Nakhon_Ratchasima', 'Roi_Et', 'Surin', 'Loei', 'Nong_Khai', 'Sakon_Nakhon', 'Udon_Thani', 'Nong_Bua_Lam_Phu', 'Nakhon_Phanom', 'Mukdahan', 'Narathiwat', 'Pattani', 'Bueng_Kan']



//get mouse position
let cX;
let cY;
function getXgetY(event) {
    cX = event.clientX
    cY = event.clientY
}

provinceId.forEach(c => document.getElementById(c).addEventListener("mouseover", getXgetY));

// create new box
function Newbox(pId){
    const box = document.createElement('div')
    box.classList.add('Box-show');
    box.style.position ='fixed';
    box.style.top = cY +'px';
    box.style.left = cX +'px';
    box.id = pId + '_data';
    const provinceData = data.find(e => e.province === enToTh[pId]);
    const ul= document.createElement('ul')
    ul.innerHTML = provinceData.province
    ul.classList.add('font');
    ul.style.paddingLeft = '30px'
    const li = document.createElement('li')
    li.innerHTML = 'Newcase : ' + provinceData.new_case
    ul.classList.add('font');
    li.classList.add('font');
    li.style.paddingLeft = '30px'
    const a = document.createElement('li') 
    const linebreak = document.createElement('br');
    a.innerHTML = 'TotalCase : ' + provinceData.total_case
    a.classList.add('font');
    a.style.paddingLeft = '30px'
    const ai = document.createElement('li')
    ai.innerHTML = 'TotalDeath : ' + provinceData.total_death
    ai.classList.add('font');
    ai.style.paddingLeft = '30px'
    box.append(ul, li,a, ai);
    document.body.append(box);
    
}



function Deletebox(pId) {
    document.getElementById(pId + '_data').remove();
}


provinceId.forEach(c => document.getElementById(c).addEventListener("mouseover", e => Newbox(e.target.id)));

provinceId.forEach(c => document.getElementById(c).addEventListener("mouseout", e => Deletebox(e.target.id)));

//button
let open = true;
const showAll = () => {
    if (open){
        open = false;
        document.querySelectorAll('.a').forEach(p => p.style.removeProperty('fill'));
        document.querySelectorAll('.b').forEach(p => p.style.removeProperty('fill'));
        document.querySelectorAll('.c').forEach(p => p.style.removeProperty('fill'));
    }
    else {
        open = true;
        document.querySelectorAll('.a').forEach(p => p.style.fill = "#ef4545");
        document.querySelectorAll('.b').forEach(p => p.style.fill = "#e7e749");
        document.querySelectorAll('.c').forEach(p => p.style.fill = "#56cb77");
    }
}
