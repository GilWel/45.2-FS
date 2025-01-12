import imageMyFoto from "../../assets/Foto.jpg"
export default function ProfileCard ({firstName,lastName,job,hobby, picture,imageStyle }){
    return (
        <div>
           <img src={picture} alt="Аватар" style={imageStyle} />
           <p>Name: {firstName}</p>
           <p>LastName: {lastName}</p>
           <p>Job: {job}</p>
           <p>Hobby: {hobby}</p>
           

        </div>
    )
}