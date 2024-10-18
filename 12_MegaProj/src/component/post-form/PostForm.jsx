import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


// function PostForm({post}) {
//   const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
//     defaultValues: { 
//       title: post?.title || '',
//       slug: post?.slug || '',
//       content: post?.content || '',
//       status: post?.status || 'active',
//     }
//   })

//   const navigate = useNavigate()
//   const userData = useSelector((state) => state.auth.userData)

//   // const submit = async(data) => {
//   //   if(post){
//   //     // post hai to file ko lo aur handle karo
//   //     const file = data.image[0] ? await appwriteService.uploadFiless(data.image[0]) : null

//   //     // purani  image delete kyoki post thi phle
//   //     if(file){
//   //       appwriteService.deleteFiles(post.featuredImage)
//   //     }

//   //     // post.$id => slug dega
//   //     // featured image ko overwrite karo
//   //     const dbPost = await appwriteService.updatePost(post.$id, {
//   //       ...data,
//   //       featuredImage: file ? file.$id : undefined
//   //     })
//   //     if(dbPost){
//   //       navigate(`/post/${dbPost.$id}`)
//   //     }
//   //   } else{
//   //     // user wants to create new form
//   //     // kuch update nhi krna
//   //     // use ne file di hogi
//   //     // chaho to daal skte  data.image[0] ?
//   //     const file = await data.image[0] ? appwriteService.uploadFiless(data.image[0]) : null

//   //     if(file){
//   //       const fileId = file.$id
//   //       data.featuredImage = fileId
//   //       const dbPost = await appwriteService.createPost({
//   //         // refer appwrite/config folder for more info
//   //         ...data,
//   //         userId: userData.$id,
//   //       })

//   //       if(dbPost){
//   //         navigate(`/post/${dbPost.$id}`)
//   //       }

//   //     }
      
//   //   }
//   // }
//   const submit = async (data) => {
//     console.log('Submit data:', data);
//     if (post) {
//         const file = data.image[0] ? await appwriteService.uploadFiles(data.image[0]) : null;
//         console.log('Uploaded file:', file);

//         if (file) {
//             appwriteService.deleteFile(post.featuredImage);
//         }

//         const dbPost = await appwriteService.updatePost(post.$id, {
//             ...data,
//             featuredImage: file ? file.$id : undefined,
//         });

//         if (dbPost) {
//             navigate(`/post/${dbPost.$id}`);
//         }
//     } else {
//         const file = await appwriteService.uploadFiles(data.image[0]);
//         console.log('Uploaded file else:', file);

//         if (file) {
//             const fileId = file.$id;
//             data.featuredImage = fileId;
//             const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         }
//     }
// };

// // helps in INTERVIEW
// // 2 input fields hai => title ko watch and slug ko change, space ko dash me convert krna hai
// // 


// const slugTransform = useCallback((value) => {
//     if(value && typeof value === "string")
//       return value
//         .trim()
//         .toLowerCase()
//         .replace(/[^a-zA-Z\d\s]+/g, "-")
//         .replace(/\s/g, "-");

//       // use regx from chatgpt
//       // global match kr rhe
//       // negate kr rhe
//       //  \d => digits \s => space
//       // inko chorke sb replace krdo

//     return "";

//     }, [])

//     // How to use this method
//     React.useEffect(() => {
//       // koi aur method banaya hai use subs me store kr skte

//       const subscription = watch((value, {name}) => {
//         if(name === "title"){
//           setValue("slug", slugTransform(value.title), {shouldValidate: true});
//         }
//       })

//       return () => {
//         subscription.unsubscribe()
//         // memory management
//         // ghumta na rhe
//       }
//     },[watch, slugTransform, setValue])



//   return (
//     // <form onSubmit={handleSubmit(submit)} className="flex flex-wrap" method="post" >
//     //         <div className="w-2/3 px-2">
//     //             <Input
//     //                 label="Title :"
//     //                 placeholder="Title"
//     //                 className="mb-4"
//     //                 {...register("title", { required: true })}
//     //             />
//     //             <Input
//     //                 label="Slug :"
//     //                 placeholder="Slug"
//     //                 className="mb-4"
//     //                 {...register("slug", { required: true })}
//     //                 onInput={(e) => {
//     //                     setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//     //                 }}
//     //             />
//     //             <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//     //         </div>
//     //         <div className="w-1/3 px-2">
//     //             <Input
//     //                 label="Featured Image :"
//     //                 type="file"
//     //                 className="mb-4"
//     //                 accept="image/png, image/jpg, image/jpeg, image/gif"
//     //                 {...register("image", { required: !post })}
//     //             />
//     //             {post && (
//     //                 <div className="w-full mb-4">
//     //                     <img
//     //                         src={appwriteService.getFilePreview(post.featuredImage)}
//     //                         alt={post.title}
//     //                         className="rounded-lg"
//     //                     />
//     //                 </div>
//     //             )}
//     //             <Select
//     //                 options={["active", "inactive"]}
//     //                 label="Status"
//     //                 className="mb-4"
//     //                 {...register("status", { required: true })}
//     //             />
//     //             <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//     //                 {post ? "Update" : "Submit"}
//     //             </Button>
//     //         </div>
//     //     </form>
//     <form onSubmit={handleSubmit((data) => {
//       console.log('Form Submitted',data);
      
//     })} className="flex flex-wrap">
//     <div className="w-2/3 px-2">
//         <Input
//             label="Title :"
//             placeholder="Title"
//             className="mb-4"
//             {...register("title", { required: true })}
//         />
//         <Input
//             label="Slug :"
//             placeholder="Slug"
//             className="mb-4"
//             {...register("slug", { required: true })}
//             onInput={(e) => {
//                 setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//             }}
//         />
//         <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//     </div>
//     <div className="w-1/3 px-2">
//         <Input
//             label="Featured Image :"
//             type="file"
//             className="mb-4"
//             accept="image/png, image/jpg, image/jpeg, image/gif"
//             {...register("image", { required: !post })}
//         />
//         {post && (
//             <div className="w-full mb-4">
//                 <img
//                     src={appwriteService.getFilePreview(post.featuredImage)}
//                     alt={post.title}
//                     className="rounded-lg"
//                 />
//             </div>
//         )}
//         <Select
//             options={["active", "inactive"]}
//             label="Status"
//             className="mb-4"
//             {...register("status", { required: true })}
//         />
//         <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//             {post ? "Update" : "Subvfmit"}
//         </Button>
//     </div>
// </form>
//   )
// }

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
      defaultValues: {
          title: post?.title || "",
          slug: post?.$id || "",
          content: post?.content || "",
          status: post?.status || "active",
      },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
      if (post) {
          const file = data.image[0] ? await appwriteService.uploadFiles(data.image[0]) : null;

          if (file) {
              appwriteService.deleteFile(post.featuredImage);
          }

          const dbPost = await appwriteService.updatePost(post.$id, {
              ...data,
              featuredImage: file ? file.$id : undefined,
          });

          if (dbPost) {
              navigate(`/post/${dbPost.$id}`);
          }
      } else {
          const file = await appwriteService.uploadFiles(data.image[0]);

          if (file) {
              const fileId = file.$id;
              data.featuredImage = fileId;
              const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

              if (dbPost) {
                  navigate(`/post/${dbPost.$id}`);
              }
          }
      }
  };

  const slugTransform = useCallback((value) => {
      if (value && typeof value === "string")
          return value
              .trim()
              .toLowerCase()
              .replace(/[^a-zA-Z\d\s]+/g, "-")
              .replace(/\s/g, "-");

      return "";
  }, []);

  React.useEffect(() => {
      const subscription = watch((value, { name }) => {
          if (name === "title") {
              setValue("slug", slugTransform(value.title), { shouldValidate: true });
          }
      });

      return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
          <div className="w-2/3 px-2">
              <Input
                  label="Title :"
                  placeholder="Title"
                  className="mb-4"
                  {...register("title", { required: true })}
              />
              <Input
                  label="Slug :"
                  placeholder="Slug"
                  className="mb-4"
                  {...register("slug", { required: true })}
                  onInput={(e) => {
                      setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                  }}
              />
              <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
          </div>
          <div className="w-1/3 px-2">
              <Input
                  label="Featured Image :"
                  type="file"
                  className="mb-4"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register("image", { required: !post })}
              />
              {post && (
                  <div className="w-full mb-4">
                      <img
                          src={appwriteService.getFilePreview(post.featuredImage)}
                          alt={post.title}
                          className="rounded-lg"
                      />
                  </div>
              )}
              <Select
                  options={["active", "inactive"]}
                  label="Status"
                  className="mb-4"
                  {...register("status", { required: true })}
              />
              <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                  {post ? "Update" : "Submit"}
              </Button>
          </div>
      </form>
  );
}
export default PostForm

// Head to ../../pages/Signup.jsx