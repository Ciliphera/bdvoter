export interface Voter {
  id: string;
  name: string;
  fatherName: string;
  dob: string;
  gender: 'Male' | 'Female';
  phone: string;
  division: string;
  district: string;
  address: string;
}

export const voters: Voter[] = [
  {
    id: "1",
    name: "Abdul Rahman Khan",
    fatherName: "Mohammad Ali Khan",
    dob: "1985-03-15",
    gender: "Male",
    phone: "+8801712345678",
    division: "Dhaka",
    district: "Dhaka",
    address: "House 12, Road 5, Dhanmondi"
  },
  {
    id: "2",
    name: "Fatima Begum",
    fatherName: "Ibrahim Hossain",
    dob: "1990-07-22",
    gender: "Female",
    phone: "+8801898765432",
    division: "Chittagong",
    district: "Chittagong",
    address: "Plot 45, Nasirabad Housing"
  },
  {
    id: "3",
    name: "Mohammad Karim",
    fatherName: "Rashid Ahmed",
    dob: "1978-11-30",
    gender: "Male",
    phone: "+8801634567890",
    division: "Khulna",
    district: "Khulna",
    address: "23/A, KDA Avenue"
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    fatherName: "Kamal Uddin",
    dob: "1995-04-18",
    gender: "Female",
    phone: "+8801912345678",
    division: "Dhaka",
    district: "Narayanganj",
    address: "Flat B4, Metro Housing"
  },
  {
    id: "5",
    name: "Rafiqul Islam",
    fatherName: "Abdul Majid",
    dob: "1982-09-25",
    gender: "Male",
    phone: "+8801756789012",
    division: "Chittagong",
    district: "Cox's Bazar",
    address: "House 7, Beach Road"
  },
  {
    id: "6",
    name: "Ayesha Siddique",
    fatherName: "Hasan Ali",
    dob: "1989-01-12",
    gender: "Female",
    phone: "+8801987654321",
    division: "Rajshahi",
    district: "Rajshahi",
    address: "House 10, Rajpara"
  },
  {
    id: "7",
    name: "Tariqul Islam",
    fatherName: "Sajjad Hossain",
    dob: "1976-06-20",
    gender: "Male",
    phone: "+8801523456789",
    division: "Sylhet",
    district: "Sylhet",
    address: "38, Amberkhana"
  },
  {
    id: "8",
    name: "Farzana Akhter",
    fatherName: "Mokhlesur Rahman",
    dob: "1998-11-05",
    gender: "Female",
    phone: "+8801789012345",
    division: "Barisal",
    district: "Pirojpur",
    address: "Village Boro Machhua"
  },
  {
    id: "9",
    name: "Kamrul Hassan",
    fatherName: "Shahjahan Ali",
    dob: "1981-08-14",
    gender: "Male",
    phone: "+8801998765432",
    division: "Mymensingh",
    district: "Mymensingh",
    address: "Panch Para, Gauripur"
  },
  {
    id: "10",
    name: "Shamima Nasrin",
    fatherName: "Abdul Hannan",
    dob: "1992-03-10",
    gender: "Female",
    phone: "+8801623456789",
    division: "Dhaka",
    district: "Gazipur",
    address: "Flat C6, Joydebpur"
  },
  {
    id: "11",
    name: "Jahangir Alam",
    fatherName: "Golam Mostafa",
    dob: "1983-04-09",
    gender: "Male",
    phone: "+8801845678901",
    division: "Rangpur",
    district: "Dinajpur",
    address: "Kaharol Upazila"
  },
  {
    id: "12",
    name: "Rubina Sultana",
    fatherName: "Abdul Malek",
    dob: "1997-09-12",
    gender: "Female",
    phone: "+8801556789012",
    division: "Khulna",
    district: "Jessore",
    address: "Housing Estate, Plot 19"
  },
  {
    id: "13",
    name: "Nazmul Huda",
    fatherName: "Rafiqul Hossain",
    dob: "1973-02-28",
    gender: "Male",
    phone: "+8801304567890",
    division: "Dhaka",
    district: "Tangail",
    address: "Gopalpur, House 22"
  },
  {
    id: "14",
    name: "Marium Akter",
    fatherName: "Nur Mohammad",
    dob: "1991-05-15",
    gender: "Female",
    phone: "+8801723456789",
    division: "Chittagong",
    district: "Bandarban",
    address: "Lama Upazila, Block D"
  },
  {
    id: "15",
    name: "Asif Ahmed",
    fatherName: "Abul Kashem",
    dob: "1987-07-07",
    gender: "Male",
    phone: "+8801887654321",
    division: "Sylhet",
    district: "Maulvibazar",
    address: "Kamalganj, Ward 3"
  },
  {
    id: "16",
    name: "Shahana Akhter",
    fatherName: "Abdur Rashid",
    dob: "1993-12-01",
    gender: "Female",
    phone: "+8801405678901",
    division: "Barisal",
    district: "Bhola",
    address: "Ward 5, Char Fashion"
  },
  {
    id: "17",
    name: "Habib Ullah",
    fatherName: "Rahmat Ali",
    dob: "1980-10-25",
    gender: "Male",
    phone: "+8801789012346",
    division: "Rangpur",
    district: "Thakurgaon",
    address: "Near Thakurgaon Hospital"
  },
  {
    id: "18",
    name: "Sumaiya Khatun",
    fatherName: "Aminul Islam",
    dob: "1996-02-18",
    gender: "Female",
    phone: "+8801634567891",
    division: "Khulna",
    district: "Satkhira",
    address: "Satkhira Sadar"
  },
  {
    id: "19",
    name: "Mohammad Ashraf",
    fatherName: "Shafiqul Alam",
    dob: "1977-03-30",
    gender: "Male",
    phone: "+8801912345679",
    division: "Dhaka",
    district: "Manikganj",
    address: "Singair, House 8"
  },
  {
    id: "20",
    name: "Razia Sultana",
    fatherName: "Kamal Hossain",
    dob: "1984-09-21",
    gender: "Female",
    phone: "+8801523456788",
    division: "Mymensingh",
    district: "Sherpur",
    address: "Nalitabari, Plot 7"
  }
];
