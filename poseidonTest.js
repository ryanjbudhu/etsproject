
module.exports = {
    launch_url: "http://poseidon.research.ets.org/ndecoretest",     //Test site
    //launch_url: "https://www.nationsreportcard.gov/ndecore",      //Production site
    //launch_url: "http://poseidon.research.ets.org/ndecorebranch", //Alternate test site


    subjectChoice: "4",
    //1Civics,2Econ,3Geo,4Mathematics,5Music,6Reading,7Science,8Tech&Eng,9USHistory,
    //10VisualArts,11Vocab,12Writing

    gradeChoice: "1",
    //1Four,2Eight,3Twelve

    yearChoice: "3",
    //3(2015),4(2013),5(2011),

    scaleChoice: "4",
    //for Mathematics:
    //      1(NumProb&Op),2(Measurement),3(Geometry),4(Data Analysis),5(Alegbra)

    jurisdictionProperties: ["national","state"],
    jurisdictionNames: {
        national: ["National", "National public", "National private"],
        state: ["Alabama", "Alaska", "Arizona", "Arkansas"]
    },
    

    national2017: {//ndedata-table tbody tr:nth-child(1)
        firstRow: ["2017","National","0-10 books","224.69",
                    "185.56","204.68","225.63","245.34","261.68",
                    "220.20","182.61","200.94","221.15","240.34","256.62"],
                    //ndedata-table tbody tr:nth-child(2)
        secondRow: ["","","More than 10","240.76",
                    "200.00","220.91","242.71","262.22","278.40",
                    "238.18","201.41","220.10","239.41","257.79","273.43"]
    },
    alabama2017: {//ndedata-table tbody tr:nth-child(4)
        firstRow: ["","Alabama","0-10 books","221.76",
                    "182.34","201.79","222.52","244.24","258.88",
                    "218.50","179.65","198.00","219.97","240.36","254.25"]
    },
    alaska2017: {//ndedata-table tbody tr:nth-child(8)
        secondRow: ["","","More than 10",
                    "‡","‡","‡","‡","‡","‡","‡","‡",
                    "‡","‡","‡","‡"]
    }
}