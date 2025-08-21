// 
import image from '../../assets/cake.jpg'
function ServiceCard({ service }) {
  return (
    <div
      className="service-card  border-pink-700 border-2 rounded-full h-70 w-70 bg-cover bg-center flex flex-col  p-4 "
      style={{ backgroundImage: `url(${service.image})` }}
    >
      <div className="p-6">
        <h3 className="text-pink-700 text-3xl font-bold">{service.title}</h3>
        <p className="text-white text-xl">{service.description}</p>
      </div>
    </div>
  );
}
export default ServiceCard;