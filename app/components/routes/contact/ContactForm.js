'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();
  const onSubmit = async (data, e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch(
        'https://mqschvcrma.us-east-2.awsapprunner.com/send_email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast({
          title: 'Form submission successful!',
          description:
            'Thank you for your information. I will get back to you soon!',
        });
      } else if (response.status === 429) {
        // Handle 429 Too Many Requests error specifically
        toast({
          variant: 'warning', // Or another appropriate variant for your UI
          title: 'Too Many Requests',
          description:
            'You have sent too many requests in a short period. Please try again later.',
        });
      } else {
        // Handle other errors
        const errorText = await response.text(); // Or .json() if your server responds with JSON
        throw new Error(errorText || 'Failed to send email');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong',
        description: error.message,
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='mb-12'>
      <motion.div
        className='mb-12'
        variants={formVariants}
        initial='hidden'
        animate='visible'
      >
        <h1 className='text-pretty mb-6'>
          Professional Web Development Services Tailored to Your Needs
        </h1>
        <p className=''>
          I specialize in a range of services to elevate your online presence:
        </p>
        <ul className='my-3'>
          <li>Website Development</li>
          <li>All Things SEO</li>
          <li>Debugging and Issue Resolution</li>
          <li>Redesigns and Enhancements</li>
          <li>Optimization of Existing Sites</li>
        </ul>
        <p>
          Whether you&apos;re an individual entrepreneur or a company seeking
          comprehensive web solutions, I&apos;m here to assist you. Let&apos;s collaborate
          and transform your ideas into reality!
        </p>
      </motion.div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <motion.label
          htmlFor='firstName'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        >
          First Name
        </motion.label>
        <motion.input
          {...register('firstName', {
            required: 'First name is required',
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'First name must contain only letters',
            },
          })}
          className='border p-2 text-black bg-[rgb(236, 236, 236)]'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        />
        {errors.firstName && (
          <span className='text-red-500'>{errors.firstName.message}</span>
        )}

        <motion.label
          htmlFor='lastName'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        >
          Last Name
        </motion.label>
        <motion.input
          {...register('lastName', {
            required: 'Last name is required',
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Last name must contain only letters',
            },
          })}
          className='border p-2 text-black bg-[rgb(236, 236, 236)]'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        />
        {errors.lastName && (
          <span className='text-red-500'>{errors.lastName.message}</span>
        )}

        <motion.label
          htmlFor='email'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        >
          Email
        </motion.label>
        <motion.input
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address',
            },
          })}
          className='border p-2 text-black bg-[rgb(236, 236, 236)]'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        />
        {errors.email && (
          <span className='text-red-500'>{errors.email.message}</span>
        )}

        <motion.label
          htmlFor='description'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        >
          Description
        </motion.label>
        <motion.textarea
          {...register('description')}
          className='border p-2 text-black bg-[rgb(236, 236, 236)]'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        ></motion.textarea>

        <motion.button
          type='submit'
          className='bg-blue-500 text-white p-2 '
          variants={formVariants}
          initial='hidden'
          animate='visible'
          whileHover={{
            scale: 1.02, // Scale effect on hover
            backgroundColor: '#1E40AF', // New background color on hover
            transition: { duration: 0.3 }, // Transition duration for both effects
          }}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}

export default ContactForm;
