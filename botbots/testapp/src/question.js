import moment from "moment"

export const analyze = (text) => {
    if (text.includes("hi") || text.includes("hello"))
      return "hi, how can i help u";
    else if (text.includes("date")) 
      return moment().format("MMMM Do YYYY");
    else if (text.includes("time")) return moment().format("h:mm:ss a");
    //what is subject name of "code" for CPE
    else if (text.includes("what is subject name of 206161 for CPE"))
      return "Calculus 1";
    else if (text.includes("what is subject name of 207105 for CPE"))
      return "Physics 1";
    else if (text.includes("what is subject name of 259191 for CPE"))
      return "PRIN OF BEING PRO";
    else if (text.includes("what is subject name of 259106 for CPE"))
      return "WORKSHOP";
    else if (text.includes("what is subject name of 261103 for CPE"))
      return "Basic CPE";
    else if (text.includes("what is subject name of 207115 for CPE"))
      return "Physics Lab 1";
    else if (text.includes("what is subject name of 259104 for CPE"))
      return "Drawing";
    else if (text.includes("what is subject name of 001101 for CPE"))
      return "English 1";
    else if (text.includes("what is subject name of 140104 for CPE"))
      return "Citizenship";
    else if (text.includes("what is subject name of 261102 for CPE"))
      return "Computer Programing";
    else if (text.includes("what is subject name of 207106 for CPE"))
      return "Physics 2";
    else if (text.includes("what is subject name of 206162 for CPE"))
      return "Calculus 2";
    else if (text.includes("what is subject name of 207116 for CPE"))
      return "Physics Lab 2";
    else if (text.includes("what is subject name of 252281 for CPE"))
      return "Circuits";
    else if (text.includes("what is subject name of 001102 for CPE"))
      return "English 2";
    else if (text.includes("who is the lectures of Physics Lab 1 for CPE"))
      return "อาทิตย์ ลภิรัตนากูล,อนุชา วัชระภาสร,นัดดา เวชชากุล,สุรเชษฐ์ ผดุงธิติธาดา,มาโนช นาคสาทา,ทิพย์สุคนธ์ คุ้มแสง,วรานนท์ อนุกูล,อัจฉราวรรณ กาศเจริญ,สุขุม อิสเสงี่ยม,คมสันติ โชคถวาย,วัลย์ชัย พรมโนภาศ,อรวรรณ คำมั่น,กมลพรรณ เพ็งพัด,วิเชียร ไกรวัฒนวงศ์,นงลักษณ์ ทองนพรัตน์";
    //what is subject name of "code" for CPEy2
    else if (text.includes("what is subject name of 206261 for CPE."))
      return "Calculus 3";
    else if (text.includes("what is subject name of 261216 for CPE."))
      return "Discrete Math";
    else if (text.includes("what is subject name of 261217 for CPE."))
      return "Data Structures";
    else if (text.includes("what is subject name of 261207 for CPE."))
      return "CPE Lab";
    else if (text.includes("what is subject name of 261210 for CPE."))
      return "Logic";
    else if (text.includes("what is subject name of 261212 for CPE."))
      return "Logic Lab";
    else if (text.includes("what is subject name of 001201 for CPE."))
      return "English R/W";
    else if (text.includes("what is subject name of 261208 for CPE."))
      return "Numerical";
    else if (text.includes("what is subject name of 261218 for CPE."))
      return "Algolithms";
    else if (text.includes("what is subject name of 261200 for CPE."))
      return "OO Program";
    else if (text.includes("what is subject name of 261332 for CPE."))
      return "Data Communication";
    else if (text.includes("what is subject name of 261214 for CPE."))
      return "Microprocessor";
    else if (text.includes("what is subject name of 261215 for CPE."))
      return "Embedded Lab";
    else if (text.includes("what is subject name of 001225 for CPE."))
      return "English in Sci";
    //what is subject name of "code" for CPEy3
    else if (text.includes("what is subject name of 261342 for CPE."))
      return "Database";
    else if (text.includes("what is subject name of 261343 for CPE."))
      return "Database Lab";
    else if (text.includes("what is subject name of 261335 for CPE."))
      return "Networks";
    else if (text.includes("what is subject name of 261336 for CPE."))
      return "Networks Lab";
    else if (text.includes("what is subject name of 261304 for CPE."))
      return "Computer Arch";
    else if (text.includes("what is subject name of 261306 for CPE."))
      return "Prob & Stat";
    else if (text.includes("what is subject name of 261361 for CPE."))
      return "Software Engineering";
    else if (text.includes("what is subject name of 261305 for CPE.")) return "OS";
    //what is subject name of "code" for CPEy4
    else if (text.includes("what is subject name of 261491 for CPE."))
      return "Project Survey";
    else if (text.includes("what is subject name of 259192 for CPE."))
      return "Activities 2";
    else if (text.includes("what is subject name of 261492 for CPE."))
      return "Project";
    else if (text.includes("what is subject name of 261405 for CPE."))
      return "Advanced CPE";
    //What is subject code of "name" for CPE
    else if (text.includes("what is subject code of Calculus 1 for CPE"))
      return "206161";
    else if (text.includes("what is subject code of Physics 1 for CPE"))
      return "207105";
    else if (text.includes("what is subject code of PRIN OF BEING PRO for CPE"))
      return "259191";
    else if (text.includes("what is subject code of WORKSHOP for CPE"))
      return "259106";
    else if (text.includes("what is subject code of Basic CPE for CPE"))
      return "261103";
    else if (text.includes("what is subject code of Physics Lab 1 for CPE"))
      return "207115";
    else if (text.includes("what is subject code of Drawing for CPE"))
      return "259104";
    else if (text.includes("what is subject code of English 1 for CPE"))
      return "001101";
    else if (text.includes("what is subject code of Citizenship for CPE"))
      return "140104";
    else if (
      text.includes("what is subject code of Computer Programing for CPE")
    )
      return "261102";
    else if (text.includes("what is subject code of Physics 2 for CPE"))
      return "207106";
    else if (text.includes("what is subject code of Calculus 2 for CPE"))
      return "206162";
    else if (text.includes("what is subject code of Physics Lab 2 for CPE"))
      return "207116";
    else if (text.includes("what is subject code of Circuits for CPE"))
      return "252281";
    else if (text.includes("what is subject code of English 2 for CPE"))
      return "001102";
    //What is subject code of "name" for CPEy2
    else if (text.includes("what is subject code of Calculus 3 for CPE"))
      return "206261";
    else if (text.includes("what is subject code of Discrete Math for CPE"))
      return "261216";
    else if (text.includes("what is subject code of Data Structures for CPE"))
      return "261217";
    else if (text.includes("what is subject code of CPE Lab for CPE"))
      return "261207";
    else if (text.includes("what is subject code of Logic for CPE"))
      return "261210";
    else if (text.includes("what is subject code of Logic Lab Lab 1 for CPE"))
      return "261212";
    else if (text.includes("what is subject code of English R/W for CPE"))
      return "001201";
    else if (text.includes("what is subject code of Numerical for CPE"))
      return "261208";
    else if (text.includes("what is subject code of Algolithms for CPE"))
      return "261218";
    else if (text.includes("what is subject code of OO Program for CPE"))
      return "261200";
    else if (
      text.includes("what is subject code of Data Communication for CPE")
    )
      return "261332";
    else if (text.includes("what is subject code of Microprocessor for CPE"))
      return "261214";
    else if (text.includes("what is subject code of Embedded Lab for CPE"))
      return "261215";
    else if (text.includes("what is subject code of English in Sci for CPE"))
      return "001225";
    //What is subject code of "name" for CPEy3
    else if (text.includes("what is subject code of Database for CPE"))
      return "261342";
    else if (text.includes("what is subject code of Database Lab for CPE"))
      return "261343";
    else if (text.includes("what is subject code of Networks for CPE"))
      return "261335";
    else if (text.includes("what is subject code of Networks Lab for CPE"))
      return "261336";
    else if (text.includes("what is subject code of Computer Arch for CPE"))
      return "261304";
    else if (text.includes("what is subject code of Prob & Stat for CPE"))
      return "261306";
    else if (
      text.includes("what is subject code of Software Engineering for CPE")
    )
      return "261361";
    else if (text.includes("what is subject code of OS for CPE")) return "261305";
    //What is subject code of "name" for CPEy4
    else if (text.includes("what is subject code of Project Survey for CPE"))
      return "261491";
    else if (text.includes("what is subject code of Activities 2 for CPE"))
      return "259192";
    else if (text.includes("what is subject code of Project for CPE"))
      return "261492";
    else if (text.includes("what is subject code of Advanced CPE for CPE"))
      return "261405";
    //Who is lecturers of "name" for CPE
    else if (text.includes("who is the lectures of Calculus 1 for CPE"))
      return "สมลักษณ์ อุตุดี,ศุภลักษณ์ โพธิ,ธงชัย ดำรงโภคภัณฑ์,รุจิรา อุ่นเจริญ,ขวัญชัย กันไว,ธีรนุช บุนนาค,สันติ ทาเสนา,จูลิน ลิคะสิริ,ขวัญชัย กันไว,ศุภณัฐ ชัยดี";
    else if (text.includes("who is the lectures of Physics 1 for CPE"))
      return "วัลย์ชัย พรมโนภาศ,สุรเชษฐ์ ผดุงธิติธาดา,วัลย์ชัย พรมโนภาศ,ปรัชญา มาลาศรี,ชนกพร ไชยวงศ์";
    else if (text.includes("who is the lectures of PRIN OF BEING PRO for CPE"))
      return "ทรงยศ กิจธรรมเกษร";
    else if (text.includes("who is the lectures of WORKSHOP for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ,เวชยันต์ รางศรี";
    else if (text.includes("who is the lectures of Basic CPE for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ";
    else if (text.includes("who is the lectures of Physics Lab 1 for CPE"))
      return "อาทิตย์ ลภิรัตนากูล,อนุชา วัชระภาสร,นัดดา เวชชากุล,สุรเชษฐ์ ผดุงธิติธาดา,มาโนช นาคสาทา,ทิพย์สุคนธ์ คุ้มแสง,วรานนท์ อนุกูล,อัจฉราวรรณ กาศเจริญ,สุขุม อิสเสงี่ยม,คมสันติ โชคถวาย,วัลย์ชัย พรมโนภาศ,อรวรรณ คำมั่น,กมลพรรณ เพ็งพัด,วิเชียร ไกรวัฒนวงศ์,นงลักษณ์ ทองนพรัตน์";
    else if (text.includes("who is the lectures of Drawing for CPE"))
      return "ศักดิ์เกษม ระมิงค์วงศ์,ยุทธนา โมนะ,วรเดช มโนสร้อย,พงษ์สวัสดิ์ เปรมเพ็ชร,จักรพงษ์ จำรูญ,มานะ แซ่ด่าน,วัชรพงษ์ ธัชยพงษ์,กฤต สุจริตธรรม";
    else if (text.includes("who is the lectures of English 1 for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of Citizenship for CPE"))
      return "ชนินทร เพ็ญสูตร,ไพลิน ภู่จีนาพันธุ์,ภาณุวัฒน์ พันธุ์ประเสริฐ";
    else if (
      text.includes("who is the lectures of Computer Programing for CPE")
    )
      return "กานต์ ปทานุคม,เกษมสิทธิ์ ตียพันธ์";
    else if (text.includes("who is the lectures of Physics 2 for CPE"))
      return "พิพัฒน์ เรือนคำ,สกล แสนทรงสิริ,วีระเดช ทองสุวรรณ,พรรัตน์ วัฒนกสิวิชช์,";
    else if (text.includes("who is the lectures of Calculus 2 for CPE"))
      return "ศุภลักษณ์ โพธิ,เบน วงศ์สายใจ,ธงชัย ดำรงโภคภัณฑ์,สมลักษณ์ อุตุดี,วันเฉลิม สุขภิการนนท์,ธีรนุช บุนนาค";
    else if (text.includes("who is the lectures of Physics Lab 2 for CPE"))
      return "สุรเชษฐ์ ผดุงธิติธาดา";
    else if (text.includes("who is the lectures of Circuits for CPE"))
      return "ปารเมศ วิระสันติ";
    else if (text.includes("who is the lectures of English 2 for CPE"))
      return "คณาจารย์";
    //Who is lecturers of "name" for CPEy2
    else if (text.includes("who is the lectures of Calculus 3 for CPE"))
      return "อรรถพล แก้วขาว,นราวดี ภูดลสิทธิพัฒน์,กัญญุตา ภู่ชินาพันธุ์,ณัฐพล พลอยมะกล่ำ,ภรัณยู จันทร,ธีรนุช บุนนาค,";
    else if (text.includes("who is the lectures of Discrete Math for CPE"))
      return "ชินวัตร อิศราดิสัยกุล,MYO THIDA";
    else if (text.includes("who is the lectures of Data Structures for CPE"))
      return "ปฏิเวธ วุฒิสารวัฒนา";
    else if (text.includes("who is the lectures of CPE Lab for CPE"))
      return "โดม โพธิกานนท์";
    else if (text.includes("who is the lectures of Logic for CPE"))
      return "ภาสกร แช่มประเสริฐ,จักรพงษ์ จำรูญ";
    else if (text.includes("who is the lectures of Logic Lab for CPE"))
      return "ณัฐนันท์ พรหมสุข,ภาสกร แช่มประเสริฐ,ธนาทิพย์ จันทร์คง,กำพล วรดิษฐ์";
    else if (text.includes("who is the lectures of English R/W for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of Numerical for CPE"))
      return "ธนาทิพย์ จันทร์คง";
    else if (text.includes("who is the lectures of Algolithms for CPE"))
      return "สรรพวรรธน์ กันตะบุตร";
    else if (text.includes("who is the lectures of OO Program for CPE"))
      return "ธนาทิพย์ จันทร์คง";
    else if (text.includes("who is the lectures of Data Communication for CPE"))
      return "กำพล วรดิษฐ์";
    else if (text.includes("who is the lectures of Microprocessor for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ";
    else if (text.includes("who is the lectures of Embedded Lab for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ";
    else if (text.includes("who is the lectures of English in Sci for CPE"))
      return "คณาจารย์";
    //Who is lecturers of "name" for CPEy3
    else if (text.includes("who is the lectures of Database for CPE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lectures of Database Lab for CPE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lectures of Networks for CPE"))
      return "อัญญา วีรประพันธ์";
    else if (text.includes("who is the lectures of Networks Lab for CPE"))
      return "โดม โพธิกานนท์,ยุทธพงษ์ สมจิต";
    else if (text.includes("who is the lectures of Computer Arch for CPE"))
      return "ศันสนีย์ เอื้อพันธ์วิริยะกุล";
    else if (text.includes("who is the lectures of Prob & Stat for CPE"))
      return "เกษมสิทธิ์ ตียพันธ์";
    else if (
      text.includes("who is the lectures of Software Engineering for CPE")
    )
      return "ลัชนา ระมิงค์วงศ์";
    else if (text.includes("who is the lectures of OS for CPE"))
      return "นริศรา เอี่ยมคณิตชาติ";
    //Who is lecturers of "name" for CPEy4
    else if (text.includes("who is the lectures of Project Survey for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of Activities 2 for CPE"))
      return "ทรงยศ กิจธรรมเกษร, ใฝ่ฝัน ตันฑกิตติ";
    else if (text.includes("who is the lectures of Project for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of Advanced CPE for CPE"))
      return "โดม โพธิกานนท์";
    //Who is lecturers of "code" for CPE
    else if (text.includes("who is the lectures of 206161 for CPE"))
      return "สมลักษณ์ อุตุดี,ศุภลักษณ์ โพธิ,ธงชัย ดำรงโภคภัณฑ์,รุจิรา อุ่นเจริญ,ขวัญชัย กันไว,ธีรนุช บุนนาค,สันติ ทาเสนา,จูลิน ลิคะสิริ,ขวัญชัย กันไว,ศุภณัฐ ชัยดี";
    else if (text.includes("who is the lectures of 207105 for CPE"))
      return "วัลย์ชัย พรมโนภาศ,สุรเชษฐ์ ผดุงธิติธาดา,วัลย์ชัย พรมโนภาศ,ปรัชญา มาลาศรี,ชนกพร ไชยวงศ์";
    else if (text.includes("who is the lectures of 259191 for CPE"))
      return "ทรงยศ กิจธรรมเกษร";
    else if (text.includes("who is the lectures of 259106 for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ,เวชยันต์ รางศรี";
    else if (text.includes("who is the lectures of 261103 for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ";
    else if (text.includes("who is the lectures of 207115 for CPE"))
      return "อาทิตย์ ลภิรัตนากูล,อนุชา วัชระภาสร,นัดดา เวชชากุล,สุรเชษฐ์ ผดุงธิติธาดา,มาโนช นาคสาทา,ทิพย์สุคนธ์ คุ้มแสง,วรานนท์ อนุกูล,อัจฉราวรรณ กาศเจริญ,สุขุม อิสเสงี่ยม,คมสันติ โชคถวาย,วัลย์ชัย พรมโนภาศ,อรวรรณ คำมั่น,กมลพรรณ เพ็งพัด,วิเชียร ไกรวัฒนวงศ์,นงลักษณ์ ทองนพรัตน์";
    else if (text.includes("who is the lectures of 259104 for CPE"))
      return "ศักดิ์เกษม ระมิงค์วงศ์,ยุทธนา โมนะ,วรเดช มโนสร้อย,พงษ์สวัสดิ์ เปรมเพ็ชร,จักรพงษ์ จำรูญ,มานะ แซ่ด่าน,วัชรพงษ์ ธัชยพงษ์,กฤต สุจริตธรรม";
    else if (text.includes("who is the lectures of 001101 for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of 140104 for CPE"))
      return "ชนินทร เพ็ญสูตร,ไพลิน ภู่จีนาพันธุ์,ภาณุวัฒน์ พันธุ์ประเสริฐ";
    else if (text.includes("who is the lectures of 261102 for CPE"))
      return "กานต์ ปทานุคม,เกษมสิทธิ์ ตียพันธ์";
    else if (text.includes("who is the lectures of 207106 for CPE"))
      return "พิพัฒน์ เรือนคำ,สกล แสนทรงสิริ,วีระเดช ทองสุวรรณ,พรรัตน์ วัฒนกสิวิชช์,";
    else if (text.includes("who is the lectures of 206162 for CPE"))
      return "ศุภลักษณ์ โพธิ,เบน วงศ์สายใจ,ธงชัย ดำรงโภคภัณฑ์,สมลักษณ์ อุตุดี,วันเฉลิม สุขภิการนนท์,ธีรนุช บุนนาค";
    else if (text.includes("who is the lectures of 207116 for CPE"))
      return "สุรเชษฐ์ ผดุงธิติธาดา";
    else if (text.includes("who is the lectures of 252281 for CPE"))
      return "ปารเมศ วิระสันติ";
    else if (text.includes("who is the lectures of 001102 for CPE"))
      return "คณาจารย์";
    //Who is lecturers of "code" for CPEy2
    else if (text.includes("who is the lectures of 206261 for CPE"))
      return "อรรถพล แก้วขาว,นราวดี ภูดลสิทธิพัฒน์,กัญญุตา ภู่ชินาพันธุ์,ณัฐพล พลอยมะกล่ำ,ภรัณยู จันทร,ธีรนุช บุนนาค,";
    else if (text.includes("who is the lectures of 261216 for CPE"))
      return "ชินวัตร อิศราดิสัยกุล,MYO THIDA";
    else if (text.includes("who is the lectures of 261217 for CPE"))
      return "ปฏิเวธ วุฒิสารวัฒนา";
    else if (text.includes("who is the lectures of 261207 for CPE"))
      return "โดม โพธิกานนท์";
    else if (text.includes("who is the lectures of 261210 for CPE"))
      return "ภาสกร แช่มประเสริฐ,จักรพงษ์ จำรูญ";
    else if (text.includes("who is the lectures of 261212 for CPE"))
      return "ณัฐนันท์ พรหมสุข,ภาสกร แช่มประเสริฐ,ธนาทิพย์ จันทร์คง,กำพล วรดิษฐ์";
    else if (text.includes("who is the lectures of 001201 for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of 261208 for CPE"))
      return "ธนาทิพย์ จันทร์คง";
    else if (text.includes("who is the lectures of 261218 for CPE"))
      return "สรรพวรรธน์ กันตะบุตร";
    else if (text.includes("who is the lectures of 261200 for CPE"))
      return "ธนาทิพย์ จันทร์คง";
    else if (text.includes("who is the lectures of 261332 for CPE"))
      return "กำพล วรดิษฐ์";
    else if (text.includes("who is the lectures of 261214 for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ";
    else if (text.includes("who is the lectures of 261215 for CPE"))
      return "อานันท์ สีห์พิทักษ์เกียรติ";
    else if (text.includes("who is the lectures of 001225 for CPE"))
      return "คณาจารย์";
    //Who is lecturers of "code" for CPEy3
    else if (text.includes("who is the lectures of 261342 for CPE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lectures of 261343 for CPE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lectures of 261335 for CPE"))
      return "อัญญา วีรประพันธ์";
    else if (text.includes("who is the lectures of 261336 for CPE"))
      return "โดม โพธิกานนท์,ยุทธพงษ์ สมจิต";
    else if (text.includes("who is the lectures of 261304 for CPE"))
      return "ศันสนีย์ เอื้อพันธ์วิริยะกุล";
    else if (text.includes("who is the lectures of 261306 for CPE"))
      return "เกษมสิทธิ์ ตียพันธ์";
    else if (text.includes("who is the lectures of 261361 for CPE"))
      return "ลัชนา ระมิงค์วงศ์";
    else if (text.includes("who is the lectures of 261305 for CPE"))
      return "นริศรา เอี่ยมคณิตชาติ";
    //Who is lecturers of "code" for CPEy4
    else if (text.includes("who is the lectures of 261491 for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of 259192 for CPE"))
      return "ทรงยศ กิจธรรมเกษร, ใฝ่ฝัน ตันฑกิตติ";
    else if (text.includes("who is the lectures of 261492 for CPE"))
      return "คณาจารย์";
    else if (text.includes("who is the lectures of 261405 for CPE"))
      return "โดม โพธิกานนท์";
    //what is subject name of "code" for ISNE
    else if (text.includes("what is subject name of 206161 for ISNE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 207105 for ISNE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 269102 for ISNE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 269101 for ISNE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 259191 for ISNE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 259104 for ISNE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 001101 for ISNE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 206162 for ISNE"))
      return "Calculus 2";
    else if (text.includes("what is subject name of 261205 for ISNE"))
      return "Algorithms";
    else if (text.includes("what is subject name of 269103 for ISNE"))
      return "Prog ISNE ";
    else if (text.includes("what is subject name of 269105 for ISNE"))
      return "ISNE Lab";
    else if (text.includes("what is subject name of 269130 for ISNE"))
      return "Data comm";
    else if (text.includes("what is subject name of 001102 for ISNE"))
      return "English 2";
    else if (text.includes("what is subject name of 140104 for ISNE"))
      return "Citizenship";
    //what is subject name of "code" for ISNEy2
    else if (text.includes("what is subject name of 261200 for ISNE"))
      return "OO Prog";
    else if (text.includes("what is subject name of 269202 for ISNE"))
      return "Algorithms ISNE";
    else if (text.includes("what is subject name of 269200 for ISNE"))
      return "Web prog";
    else if (text.includes("what is subject name of 269201 for ISNE"))
      return "ISNE Lab 2";
    else if (text.includes("what is subject name of 261335 for ISNE"))
      return "Networks";
    else if (text.includes("what is subject name of 261336 for ISNE"))
      return "Networks Lab";
    else if (text.includes("what is subject name of 255201 for ISNE"))
      return "Analysis in IE";
    else if (text.includes("what is subject name of 001201 for ISNE"))
      return "English 3";
    else if (text.includes("what is subject name of 261342 for ISNE"))
      return "Database";
    else if (text.includes("what is subject name of 261343 for ISNE"))
      return "Database Lab";
    else if (text.includes("what is subject name of 269210 for ISNE"))
      return "Comp Arch";
    else if (text.includes("what is subject name of 261433 for ISNE"))
      return "Network Prog";
    else if (text.includes("what is subject name of 252281 for ISNE"))
      return "Circuits ISNE";
    else if (text.includes("what is subject name of 001225 for ISNE"))
      return "English in Sci";
    //what is subject name of "code" for ISNEy3
    else if (text.includes("what is subject name of 261361 for ISNE"))
      return "Software Engr";
    else if (text.includes("what is subject name of 269340 for ISNE"))
      return "Data Centric";
    else if (text.includes("what is subject name of 261305 for ISNE"))
      return "OS";
    else if (text.includes("what is subject name of 261434 for ISNE"))
      return "Network Design";
    else if (text.includes("what is subject name of 269430 for ISNE"))
      return "Wireless";
    else if (text.includes("what is subject name of 269360 for ISNE"))
      return "Platform Prog";
    else if (text.includes("what is subject name of 261446 for ISNE"))
      return "Info Systems";
    else if (text.includes("what is subject name of 269370 for ISNE"))
      return "Project Mgmt";
    else if (text.includes("what is subject name of 261447 for ISNE"))
      return "Network Security";
    //what is subject name of "code" for ISNEy4
    else if (text.includes("what is subject name of 269491 for CPE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 269400 for CPE"))
      return "Advanced ISNE";
    else if (text.includes("what is subject name of 269470 for CPE"))
      return "IT Mgmt";
    else if (text.includes("what is subject name of 269492 for CPE"))
      return "Project Survey";
    else if (text.includes("what is subject name of 259192 for CPE"))
      return "Activities 2";
    //What is subject code of "name" for ISNE
    else if (text.includes("what is subject code of Calculus 1 for ISNE"))
      return "206161";
    else if (text.includes("what is subject code of Physics 1 for ISNE"))
      return "207105";
    else if (text.includes("what is subject code of Basic Prog for ISNE"))
      return "269102";
    else if (text.includes("what is subject code of Intro to ISNE for ISNE"))
      return "269101";
    else if (text.includes("what is subject code of Activities 1 for ISNE"))
      return "259191";
    else if (text.includes("what is subject code of Drawing for ISNE"))
      return "259104";
    else if (text.includes("what is subject code of English 1 for ISNE"))
      return "001101";
    else if (text.includes("what is subject code of Calculus 2 for ISNE"))
      return "206162";
    else if (text.includes("what is subject code of Algorithms  for ISNE"))
      return "261205";
    else if (text.includes("what is subject code of Prog ISNE  for ISNE"))
      return "269103";
    else if (text.includes("what is subject code of ISNE Lab for ISNE"))
      return "269105";
    else if (text.includes("what is subject code of Data comm for ISNE"))
      return "269130";
    else if (text.includes("what is subject code of English 2 for ISNE"))
      return "001102";
    else if (text.includes("what is subject code of Citizenship for ISNE"))
      return "140104";
    //What is subject code of "name" for ISNEy2
    else if (text.includes("what is subject code of OO Prog for ISNE"))
      return "261200";
    else if (text.includes("what is subject code of Algorithms ISNE for ISNE"))
      return "269202";
    else if (text.includes("what is subject code of Web prog for ISNE"))
      return "269200";
    else if (text.includes("what is subject code of ISNE Lab 2 for ISNE"))
      return "269201";
    else if (text.includes("what is subject code of Networks for ISNE"))
      return "261335";
    else if (text.includes("what is subject code of Networks Lab for ISNE"))
      return "261336";
    else if (text.includes("what is subject code of Analysis in IE for ISNE"))
      return "255201";
    else if (text.includes("what is subject code of English 3 for ISNE"))
      return "001201";
    else if (text.includes("what is subject code of Database for ISNE"))
      return "261342";
    else if (text.includes("what is subject code of Database Lab for ISNE"))
      return "261343";
    else if (text.includes("what is subject code of Comp Arch for ISNE"))
      return "269210";
    else if (text.includes("what is subject code of Network Prog for ISNE"))
      return "261433";
    else if (text.includes("what is subject code of Circuits ISNE for ISNE"))
      return "252281";
    else if (text.includes("what is subject code of English in Sci for ISNE"))
      return "001225";
    //What is subject code of "name" for ISNEy3
    else if (text.includes("what is subject code of Software Engr for ISNE"))
      return "261361";
    else if (text.includes("what is subject code of Data Centric for ISNE"))
      return "269340";
    else if (text.includes("what is subject code of OS for ISNE"))
      return "261305";
    else if (text.includes("what is subject code of Network Design for ISNE"))
      return "261434";
    else if (text.includes("what is subject code of Wireless for ISNE"))
      return "269430";
    else if (text.includes("what is subject code of Platform Prog for ISNE"))
      return "269360";
    else if (text.includes("what is subject code of Info Systems for ISNE"))
      return "261446";
    else if (text.includes("what is subject code of Project Mgmt for ISNE"))
      return "269370";
    else if (text.includes("what is subject code of Network Security for ISNE"))
      return "261447";
    //What is subject code of "name" for ISNEy4
    else if (text.includes("what is subject code of Project Survey for ISNE"))
      return "269491";
    else if (text.includes("what is subject code of Advanced ISNE for ISNE"))
      return "269400";
    else if (text.includes("what is subject code of IT Mgmt for ISNE"))
      return "269470";
    else if (text.includes("what is subject code of Project Survey for ISNE"))
      return "269492";
    else if (text.includes("what is subject code of Activities 2 for ISNE"))
      return "259192";
    //Who is lecturers of "name" for ISNE
    else if (text.includes("who is the lecturers of Calculus 1 for ISNE"))
      return "จูลิน ลิคะสิริ";
    else if (text.includes("who is the lecturers of Physics 1 for ISNE"))
      return "ชนกพร ไชยวงศ์";
    else if (text.includes("who is the lecturers of Basic Prog for ISNE"))
      return "สันติ พิทักษ์กิจนุกูร";
    else if (text.includes("who is the lecturers of Intro to ISNE for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of Activities 1 for ISNE"))
      return "ใฝ่ฝัน ตันฑกิตติ";
    else if (text.includes("who is the lecturers of Drawing  for ISNE"))
      return "มานะ แซ่ด่าน";
    else if (text.includes("who is the lecturers of English 1 for ISNE"))
      return "คณาจารย์";
    else if (text.includes("who is the lecturers of Calculus 2 for ISNE"))
      return "ธีรนุช บุนนาค";
    else if (text.includes("who is the lecturers of Algorithms for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of Prog ISNE for ISNE"))
      return "นวดนย์ คุณเลิศกิจ";
    else if (text.includes("who is the lecturers of ISEN Lab for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of Data comm for ISNE"))
      return "อัญญา วีรประพันธ์";
    else if (text.includes("who is the lecturers of English 2 for ISNE"))
      return "คณาจารย์";
    else if (text.includes("who is the lecturers of Citizenship for ISNE"))
      return "ภาณุวัฒน์ พันธุ์ประเสริฐ";
    //Who is lecturers of "name" for ISNEy2
    else if (text.includes("who is the lecturers of OO Prog for ISNE"))
      return "นวดนย์ คุณเลิศกิจ";
    else if (text.includes("who is the lecturers of Algorithms ISNE for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of Web prog for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of ISNE Lab 2 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of Networks for ISNE"))
      return "อัญญา วีรประพันธ์, ตรัสพงศ์ ไทยอุปถัมภ์";
    else if (text.includes("who is the lecturers of Networks Lab  for ISNE"))
      return "ยุทธพงษ์ สมจิต";
    else if (text.includes("who is the lecturers of Analysis in IE for ISNE"))
      return "รัฐพล ปิ่นนราทิพย์, ฐากร โอภาสสุวรรณ";
    else if (text.includes("who is the lecturers of English 3 for ISNE"))
      return "คณาจารย์";
    else if (text.includes("who is the lecturers of Database for ISNE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lecturers of Database Lab for ISNE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lecturers of Comp Arch for ISNE"))
      return "ภาสกร แช่มประเสริฐ, MYO THIDA";
    else if (text.includes("who is the lecturers of Network Prog for ISNE"))
      return "พฤษภ์ บุญมา";
    else if (text.includes("who is the lecturers of Circuits ISNE for ISNE"))
      return "ปารเมศ วิระสันติ, ดลเดช ตันตระวิวัฒน์";
    else if (text.includes("who is the lecturers of English in Sci for ISNE"))
      return "คณาจารย์";
    //Who is lecturers of "name" for ISNEy3
    else if (text.includes("who is the lecturers of Software Engr for ISNE"))
      return "ลัชนา ระมิงค์วงศ์";
    else if (text.includes("who is the lecturers of Data Centric for ISNE"))
      return "พฤษภ์ บุญมา";
    else if (text.includes("who is the lecturers of OS for ISNE"))
      return "นริศรา เอี่ยมคณิตชาติ";
    else if (text.includes("who is the lecturers of Network Design for ISNE"))
      return "ยุทธพงษ์ สมจิต";
    else if (text.includes("who is the lecturers of Wireless Sci for ISNE"))
      return "กำพล วรดิษฐ์";
    else if (text.includes("who is the lecturers of Platform Prog for ISNE"))
      return "พฤษภ์ บุญมา";
    else if (text.includes("who is the lecturers of Info Systems for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of Project Mgmt for ISNE"))
      return "ศักดิ์กษิต ระมิงค์วงศ์";
    else if (text.includes("who is the lecturers of Network Security for ISNE"))
      return "กนก ก๋องหล้า, ศศิน จันทร์พวงทอง";
    //Who is lecturers of "name" for ISNEy4
    else if (text.includes("who is the lecturers of Project Survey for ISNE"))
      return "-";
    else if (text.includes("who is the lecturers of Advanced ISNE for ISNE"))
      return "โดม โพธิกานนท์";
    else if (text.includes("who is the lecturers of IT Mgmt for ISNE"))
      return "ณัฐนันท์ พรหมสุข";
    else if (text.includes("who is the lecturers of Project Survey for ISNE"))
      return "-";
    else if (text.includes("who is the lecturers of Activities 2 for ISNE"))
      return "-";
    //Who is lecturers of "code" for ISNE
    else if (text.includes("who is the lecturers of 206161 for ISNE"))
      return "จูลิน ลิคะสิริ";
    else if (text.includes("who is the lecturers of 207105 for ISNE"))
      return "ชนกพร ไชยวงศ์";
    else if (text.includes("who is the lecturers of 269102 for ISNE"))
      return "สันติ พิทักษ์กิจนุกูร";
    else if (text.includes("who is the lecturers of 269101 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of 259191 for ISNE"))
      return "ใฝ่ฝัน ตันฑกิตติ";
    else if (text.includes("who is the lecturers of 259104  for ISNE"))
      return "มานะ แซ่ด่าน";
    else if (text.includes("who is the lecturers of 001101 for ISNE"))
      return "คณาจารย์";
    else if (text.includes("who is the lecturers of 206162 for ISNE"))
      return "ธีรนุช บุนนาค";
    else if (text.includes("who is the lecturers of 261205 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of 269103 for ISNE"))
      return "นวดนย์ คุณเลิศกิจ";
    else if (text.includes("who is the lecturers of 269105 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of 269130 for ISNE"))
      return "อัญญา วีรประพันธ์";
    else if (text.includes("who is the lecturers of 001102 for ISNE"))
      return "คณาจารย์";
    else if (text.includes("who is the lecturers of 140104 for ISNE"))
      return "ภาณุวัฒน์ พันธุ์ประเสริฐ";
    //Who is lecturers of "code" for ISNEy2
    else if (text.includes("who is the lecturers of 261200 for ISNE"))
      return "นวดนย์ คุณเลิศกิจ";
    else if (text.includes("who is the lecturers of 269202 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of 269200 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of 269201 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of 261335 for ISNE"))
      return "อัญญา วีรประพันธ์, ตรัสพงศ์ ไทยอุปถัมภ์";
    else if (text.includes("who is the lecturers of 261336 for ISNE"))
      return "ยุทธพงษ์ สมจิต";
    else if (text.includes("who is the lecturers of 255201 for ISNE"))
      return "รัฐพล ปิ่นนราทิพย์, ฐากร โอภาสสุวรรณ";
    else if (text.includes("who is the lecturers of 001201 for ISNE"))
      return "คณาจารย์";
    else if (text.includes("who is the lecturers of 261342 for ISNE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lecturers of 261343 for ISNE"))
      return "จักรพงศ์ นาทวิชัย";
    else if (text.includes("who is the lecturers of 269210 for ISNE"))
      return "ภาสกร แช่มประเสริฐ, MYO THIDA";
    else if (text.includes("who is the lecturers of 261433 for ISNE"))
      return "พฤษภ์ บุญมา";
    else if (text.includes("who is the lecturers of 252281 for ISNE"))
      return "ปารเมศ วิระสันติ, ดลเดช ตันตระวิวัฒน์";
    else if (text.includes("who is the lecturers of 001225 for ISNE"))
      return "คณาจารย์";
    //Who is lecturers of "code" for ISNEy3
    else if (text.includes("who is the lecturers of 261361 for ISNE"))
      return "ลัชนา ระมิงค์วงศ์";
    else if (text.includes("who is the lecturers of 269340 for ISNE"))
      return "พฤษภ์ บุญมา";
    else if (text.includes("who is the lecturers of 261305 for ISNE"))
      return "นริศรา เอี่ยมคณิตชาติ";
    else if (text.includes("who is the lecturers of 261434 for ISNE"))
      return "ยุทธพงษ์ สมจิต";
    else if (text.includes("who is the lecturers of 269430 for ISNE"))
      return "กำพล วรดิษฐ์";
    else if (text.includes("who is the lecturers of 269360 for ISNE"))
      return "พฤษภ์ บุญมา";
    else if (text.includes("who is the lecturers of 261446 for ISNE"))
      return "KENNETH COSH";
    else if (text.includes("who is the lecturers of 269370 for ISNE"))
      return "ศักดิ์กษิต ระมิงค์วงศ์";
    else if (text.includes("who is the lecturers of 261447 for ISNE"))
      return "กนก ก๋องหล้า, ศศิน จันทร์พวงทอง";
    //Who is lecturers of "code" for ISNEy4
    else if (text.includes("who is the lecturers of 269491 for ISNE"))
      return "-";
    else if (text.includes("who is the lecturers of 269400 for ISNE"))
      return "โดม โพธิกานนท์";
    else if (text.includes("who is the lecturers of 269470 for ISNE"))
      return "ณัฐนันท์ พรหมสุข";
    else if (text.includes("who is the lecturers of 269492 for ISNE"))
      return "-";
    else if (text.includes("who is the lecturers of 259192 for ISNE"))
      return "-";
    //list subject name y1-y4 student of CPE.
    else if (
      text.includes("list of subject name for first year student of CPE")
    )
      return "For First Part of semester is Calculus 1, Physics 1, PRIN OF BEING PRO, WORKSHOP, Basic CPE, Physics Lab 1, Drawing, English 1, Citizenship and for Second Part of semester is Computer Programing, Physics 2, Calculus 2, Physics Lab 2, Circuits, English 2 ";
    else if (
      text.includes("list of subject name for second year student of CPE")
    )
      return "For First Part of semester is Calculus 3, Discrete Math, Data Structures, CPE Lab, Logic, Logic Lab, English R/W and for Second Part of semester is Numerical, Algolithms, OO Program, Data Communication, Microprocessor, Embedded Lab, English in Sci";
    
    //only text with "third" this it need to fix
      else if (
      text.includes("list of subject name for third year student of CPE")
    )
      return "For First Part of semester is Database, Database Lab, Networks, Networks Lab, Computer Archp and for Second Part of semester is Prob & Stat, Software Engineering, OS";
    else if (
      text.includes("list of subject name for fourth year student of CPE")
    )
      return "For First Part of semester is Project Survey and for Second Part of semester is Activities 2, Project, Advanced CPE";
    //list subject name y1-y4 student of ISNE.
    else if (
      text.includes("list of subject name for first year student of ISNE")
    )
      return "For First Part of semester is Calculus 1, Physics 1, Basic Prog, Intro to ISNE, Activities 1, Drawing , English 1 and for Second Part of semester is Calculus 2, Algorithms , Prog ISNE, ISNE Lab, Data comm, English 2, Citizenship ";
    else if (
      text.includes("list of subject name for second year student of ISNE")
    )
      return "For First Part of semester is OO Prog, Algorithms ISNE, Web prog, ISNE Lab 2, Networks, Networks Lab, Analysis in IE, English 3 and for Second Part of semester is Database, Database Lab, Comp Arch, Network Prog, Circuits ISNE, English in Sci";
    else if (
      text.includes("list of subject name for third year student of ISNE")
    )
      return "For First Part of semester is Software Engr, Data Centric, OS, Network Design, Wireless and for Second Part of semester is Platform Prog, Info Systems, Project Mgmt, Network Security";
    else if (
      text.includes("list of subject name for fourth year student of ISNE")
    )
      return "For First Part of semester is Project Survey and for Second Part of semester is Advanced ISNE, IT Mgmt, Project Survey, Activities 2";
    else if (text.includes("ty") || text.includes("thank you") || text.includes("thank")) return "thank you";
    
    return 'Can you explain more about your question? '
}