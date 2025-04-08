


import { auth, db } from "@/firebase/admin";
import { UserRecord } from "firebase-admin/auth";
import { cookies } from "next/headers";

export async function getInterviewByUserId(userId:string): Promise<Interview[]| null >{
    console.log("Fetching interviews for userId:", userId);
    const interviews = await db.collection('interviews').where('userid', '==',userId).orderBy('createdAt','desc').get();
    return interviews.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    })) as Interview[];
}
export async function getLastestInterview(params:GetLatestInterviewsParams): Promise<Interview[]| null >{

    const {userId,limit=20}=params;
    const interviews = await db.collection('interviews').orderBy('createdAt','desc').where('finalized', '==',true).where('userid', '!=', userId).limit(limit).get();
    return interviews.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    })) as Interview[];
}
export async function getInterviewById(id:string): Promise<Interview| null >{
    // console.log("Fetching interviews for userId:", userId);
    const interview = await db.collection('interviews').doc(id).get();
    return interview.data() as Interview | null ;
}