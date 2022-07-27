import { useEffect, useState } from "react";


const useGroup = () => {
    const [groups ,setGroups] = useState<Array<number[]>>([]);
    let [marksArr ,setMarksArr] = useState<Array<number>>([]);
    let [teacherMarks , setTeacherMarks] = useState<Array<number>>([]);

    useEffect(() => {
       //create a array of arrays of same array elements
         let baseArray = [...Array(10)].map((item,id) =>  0);
         const groups = baseArray.map((item,id) => Array(9).fill(0));
            setGroups([...groups]);
            setMarksArr([...baseArray]);
            setTeacherMarks([...baseArray]);
    },[]);
   

    const getKey = (groupId : number, itemId : number) => {
        if(groupId >= groups.length || itemId >= groups[groupId].length){
            return -1;
        }else{
            return groups[groupId][itemId];
        }
    }

    const setKey = (groupId : number, itemId : number, value : number) => {
        if(groupId >= groups.length || itemId > groups[groupId].length){
            return;
        }else{
            groups[groupId][itemId] = value;
            setGroups([...groups]);
        }
    }

    const handleMarks = (groupId : number, itemId : number, marks : number) => {
         if(groupId !== -1 ){
            setKey(groupId,itemId,marks);
            let total = groups[groupId].reduce((acc,item) => acc + item,0);
            marksArr[groupId] = total;
            setMarksArr([...marksArr]);
         }else{
            
            teacherMarks[itemId] = marks;
            setTeacherMarks([...teacherMarks]);
         }
      
    }

     return {
       groups,
       setKey,
      handleMarks,
        marksArr,
        teacherMarks
     };
}


export default useGroup