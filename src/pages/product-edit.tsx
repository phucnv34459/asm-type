import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TProduct } from '~/interfaces/Product'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { getProduct } from '~/apis/product'

type Props = {
  onEdit: (product: TProduct) => void
}

const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  thumbnail: Joi.string(),
  price: Joi.number().required().min(0),
  stock: Joi.number().min(0).max(100),
  description: Joi.string()
})

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(productSchema)
  })
  const onSubmit = (product: TProduct) => {
    onEdit({ ...product, id })
  }
  useEffect(() => {
    ;(async () => {
      const data = await getProduct(`/${id}`)
      setProduct(data)
    })()
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Update sản phẩm </h1>
        </div>
        <div className='mb-3 mt-5'>
          <label htmlFor='productName' className='form-label'>
            Tên sản phẩm
          </label>
          <input
            type='text'
            {...register('title', {
              required: true,
              minLength: 3,
              maxLength: 255
            })}
            defaultValue={product?.title}
            id='productName'
            className='form-control'
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className='mb-3 '>
          <label htmlFor='productImage' className='form-label'>
            Ảnh sản phẩm
          </label>
          <input
            type='text'
            {...register('thumbnail')}
            defaultValue={product?.thumbnail}
            id='productImage'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='productPrice' className='form-label'>
            Giá sản phẩm
          </label>
          <input
            type='number'
            {...register('price', {
              required: true,
              min: 0
            })}
            defaultValue={product?.price as number}
            id='productPrice'
            className='form-control'
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='productPrice' className='form-label'>
            Số lượng
          </label>
          <input
            type='number'
            {...register('stock', { minLength: 0, maxLength: 100 })}
            defaultValue={product?.stock}
            id='productStock'
            className='form-control'
          />
          {errors.stock && <p>{errors.stock.message}</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='productDesc' className='form-label'>
            Mô tả sản phẩm
          </label>

          <input
            className='form-control'
            {...register('description')}
            defaultValue={product?.description}
            id='productDesc'
          ></input>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductEdit
