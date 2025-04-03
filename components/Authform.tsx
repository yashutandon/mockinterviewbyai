
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const authFormSchema =(type:FormType)=>{
    return z.object({
        name: type==='sign-up' ? z.string().min(3,'Name must be at least 3 characters long'):z.string().optional(),
        email: z.string().email(),
        password:z.string().min(3),
    }) 
}

const Authform = ({type}:{type:FormType}) => {
    const router=useRouter();
    const formSchema=authFormSchema(type);
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
        if(type==='sign-up'){
            toast.success('Account created successfully.Please Sign In.')
            router.push('/sign-in');

        }else{
           toast.success('Sign in successfully.');
           router.push('/')
        }
    }catch(e){
        console.log(e);
        toast.error(`There was an error: ${e}`);
    }
  }

  const isSignIn= type==='sign-in';
  return (
    <div className="card-border lg:min-w-[560px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt='logo' width={32} height={32} />
                    <h2 className="text-primary-100">MockPrepAi</h2>
            </div>
            <h3 className="">Practice Job Interviews With An Ai</h3>
        
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
        {!isSignIn && (<FormField control={form.control} name="name" label="Name" placeholder="Enter Your Name" />)}
        <FormField control={form.control} name="email" label="Email" placeholder="Enter Your Email address" type="email" />
        <FormField control={form.control} name="password" label="Passsword" placeholder="Enter Your Password" type="password" />
        <Button className="btn" type="submit"> {isSignIn ? 'Sign In' : 'Create an account'}</Button>
      </form>
    </Form>
    <p className="text-center">
        {isSignIn ? 'Don\'t have an account?' : 'Already have an account?'}
        <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
        {!isSignIn ? 'Sign in' : 'Sign up'}
        </Link>
    </p>
    </div>
    </div>
  )
}

export default Authform