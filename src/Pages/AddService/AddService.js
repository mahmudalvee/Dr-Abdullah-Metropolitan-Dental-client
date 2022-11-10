import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')

    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.Title.value;
        const img= form.Img.value;
        const description = form.Description.value;
        const price = form.Price.value;
        const rating = form.Rating.value;
  
        const newService = {
            title: title,
            img: img,
            description: description,
            price: price,
            rating: rating
        }
  
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Service added successfully!');
                <Toaster />
                    form.reset();
                }
            })
            .catch(er => console.error(er));
        }

    return (
      <div className="my-12  mx-auto lg:w-10/12 sm:w-9/12">
            <form onSubmit={handlePlaceService}>
                <h2 className="text-3xl text-center text-primary">Add A Service</h2>
                <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="Title" type="text" placeholder="Service Title" className="input input-ghost w-full  input-bordered" required/>
                    <input name="Img" type="text" placeholder="Image url (use imgbb.com)" className="input input-ghost w-full  input-bordered" required/>
                    <input name="Price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required/>
                    <input name="Rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" required/>                    
                </div>
                <textarea name="Description" className="my-3 textarea textarea-bordered h-24 w-full" placeholder="Add Description" required></textarea>

                <div className="text-center">
                <input className='btn' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;