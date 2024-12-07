import DashboardSectionTitle from "../../components/DashboardSectionTitle.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import {forwardRef, useState} from "react";
import addPhotoIcon from "../../assets/svg/addPhoto-gray.svg";
import {useForm} from "react-hook-form";
import PropTypes from "prop-types";

function ConsultationWithPlantPathologist() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'pt-6 md:pt-10 md:pr-6'}>
            <DashboardSectionTitle title={'مشاره با گیاه‌پزشک'}/>
            <div
                className={'flex flex-col sm:p-6 md:p-0 lg:p-6 sm:border md:border-0 lg:border border-neutral3 w-full rounded-2xl mt-4'}>
                <FileUploadBox {...register("plantImage")} errors={errors.plantImage ? [errors.plantImage] : []}/>
                <textarea className={'w-full bg-neutral2 border border-neutral6 rounded outline-0 resize-y py-4 px-3 mt-10'} rows={8} placeholder={'توضیح درباره مشکل گیاه:'} {...register("problemDescription", {required: "پر کردن این بخش الزامی است"})}></textarea>
                {(errors.problemDescription ? [errors.problemDescription] : []).map((error, index) => (
                    <div key={index} className={'cursor-default pr-2'}>
                        <span className={'text-error text-xs'}>{error?.message}</span>
                    </div>
                ))}
                <div className={'self-end mt-6 w-full sm:w-40 md:w-full lg:w-40 *:w-full max-sm:mb-6'}>
                    <CustomButton type={'submit'} title={'ارسال'} onClick={() => true} size={48} isFilled
                                  isSquared/>
                </div>
            </div>
        </form>
    );
}

const FileUploadBox = forwardRef(({errors, ...props}, ref) => {
    const [backgroundImage, setBackgroundImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setBackgroundImage(imageUrl);
        }
        // eslint-disable-next-line react/prop-types
        props?.onChange(event)
    };

    return (
        <div>
            <label
                className={`w-[120px] h-[120px] border border-neutral6 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden ${backgroundImage ? '' : 'bg-neutral2'}`}
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {!backgroundImage && (
                    <div className={'flex flex-col gap-y-2 items-center'}>
                        <img src={addPhotoIcon} className={'w-6 h-6'}/>
                        <span className={'text-xs'}>آپلود تصویر گیاه</span>
                    </div>)}
                <input
                    ref={ref}
                    {...props}
                    type="file"
                    accept="image/*"
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                />
            </label>
            {errors?.map((error, index) => (
                <div key={index} className={'cursor-default'}>
                    <span className={'text-error text-xs'}>{error.message}</span>
                </div>
            ))}
        </div>
    );
});
FileUploadBox.propTypes = {
    errors: PropTypes.array
}
FileUploadBox.displayName = 'FileUploadBox';

export default ConsultationWithPlantPathologist;