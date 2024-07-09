import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { usePostCourses } from '../../hooks/usePostCourse';

const CourseUpload = () => {
  const { authUser }: any = useAuthContext();
  const { loading, postCourse } = usePostCourses();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    instructor: authUser._id,
    categories: [] as string[],
    offeredResources: '' as string,
    difficulty: '' as string,
    video: '',
    files: '',
    background_image: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postCourse(course);
  };
  return (
    <>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-bold mb-4 text-black'>
          Încarcă un curs nou
        </h2>

        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-gray-700 font-bold mb-2'
            >
              Titlul cursului
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 font-bold mb-2'
            >
              Descriere
            </label>
            <textarea
              id='description'
              name='description'
              rows={4}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
              required
            ></textarea>
          </div>

          <div className='mb-4'>
            <label
              htmlFor='offeredResources'
              className='block text-gray-700 font-bold mb-2'
            >
              Ce materiale oferă cursul?
            </label>
            <input
              type='text'
              id='offeredResources'
              name='offeredResources'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) =>
                setCourse({ ...course, offeredResources: e.target.value })
              }
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='difficulty'
              className='block text-gray-700 font-bold mb-2'
            >
              Dificultatea cursului
            </label>
            <input
              type='text'
              id='difficulty'
              name='difficulty'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) =>
                setCourse({ ...course, difficulty: e.target.value })
              }
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='video'
              className='block text-gray-700 font-bold mb-2'
            >
              Încarcă un video
            </label>
            <input
              type='file'
              id='video'
              name='video'
              accept='video/*'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) => setCourse({ ...course, video: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='files'
              className='block text-gray-700 font-bold mb-2'
            >
              Încarcă fișiere
            </label>
            <input
              type='file'
              id='files'
              name='files'
              multiple
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) => setCourse({ ...course, files: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='background_image'
              className='block text-gray-700 font-bold mb-2'
            >
              Încarcă o imagine de fundal
            </label>
            <input
              type='file'
              id='background_image'
              name='background_image'
              accept='image/*'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) =>
                setCourse({ ...course, background_image: e.target.value })
              }
            />
          </div>

          <div>
            <div className='flex mt-4'>
              <input
                type='checkbox'
                className='checkbox checkbox-primary'
                onChange={(e) =>
                  setCourse({
                    ...course,
                    categories: e.target.checked
                      ? [...course.categories, 'Programare']
                      : course.categories.filter((g) => g !== 'Programare'),
                  })
                }
              />
              <p className='ml-2 text-semibold text-black'>Programare</p>
            </div>

            <div className='flex mt-4'>
              <input
                type='checkbox'
                className='checkbox checkbox-primary'
                onChange={(e) =>
                  setCourse({
                    ...course,
                    categories: e.target.checked
                      ? [...course.categories, 'Marketing']
                      : course.categories.filter((g) => g !== 'Marketing'),
                  })
                }
              />
              <p className='ml-2 text-semibold text-black'>Marketing</p>
            </div>

            <div className='flex mt-4'>
              <input
                type='checkbox'
                className='checkbox checkbox-primary'
                onChange={(e) =>
                  setCourse({
                    ...course,
                    categories: e.target.checked
                      ? [...course.categories, 'Economie']
                      : course.categories.filter((g) => g !== 'Economie'),
                  })
                }
              />
              <p className='ml-2 text-semibold text-black'>Economie</p>
            </div>

            <div className='flex mt-4'>
              <input
                type='checkbox'
                className='checkbox checkbox-primary'
                onChange={(e) =>
                  setCourse({
                    ...course,
                    categories: e.target.checked
                      ? [...course.categories, 'Științe aplicate']
                      : course.categories.filter(
                          (g) => g !== 'Științe aplicate'
                        ),
                  })
                }
              />
              <p className='ml-2 text-semibold text-black'>Științe aplicate</p>
            </div>

            <div className='flex mt-4'>
              <input
                type='checkbox'
                className='checkbox checkbox-primary'
                onChange={(e) =>
                  setCourse({
                    ...course,
                    categories: e.target.checked
                      ? [...course.categories, 'Securitate cibernetică']
                      : course.categories.filter(
                          (g) => g !== 'Securitate cibernetică'
                        ),
                  })
                }
              />
              <p className='ml-2 text-semibold text-black'>
                Securitate cibernetică
              </p>
            </div>
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300'
            >
              Încarcă cursul
              {loading ? <div className='laoding loading-spinner'></div> : null}
            </button>
          </div>
        </form>
      </div>
      ;
    </>
  );
};

export default CourseUpload;
