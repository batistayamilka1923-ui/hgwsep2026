import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown,
  UserPlus
} from 'lucide-react';
import { SITE_INFO } from '../data/siteInfo';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'Panamá',
    interest: 'Comprar productos',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Yamilka Indira Batista Aguila (Código: Yamilka507), mi nombre es *${formData.name}* de *${formData.country}*.\n` +
      `Teléfono: ${formData.phone}\n` +
      `Interés: ${formData.interest}\n` +
      `Mensaje: ${formData.message}\n\n` +
      `Deseo consultar sobre los productos HGW y aprovechar el 30% de descuento al activarme.`;
    const url = `${SITE_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Cómo puedo comprar los productos en Panamá?',
      a: 'Puedes agregar los productos que desees a tu carrito y presionar "Pedir por WhatsApp", o escribir directamente a Yamilka Batista. Coordinamos entregas a domicilio en la Ciudad de Panamá y envíos al interior del país.'
    },
    {
      q: '¿Qué beneficios obtengo al afiliarme como socio HGW?',
      a: 'Obtienes entre un 30% y un 50% de descuento en todas tus recompras, acceso a bonos de ganancia mutua, la oportunidad de distribuir productos originales y capacitaciones continuas en el equipo de Yamilka Batista.'
    },
    {
      q: '¿Los productos son originales y cuentan con registro?',
      a: 'Sí, todos los productos distribuidos por Yamilka Batista son 100% originales de la corporación Health Green World, manufacturados bajo rigurosos estándares de calidad internacional y normas sanitarias.'
    },
    {
      q: '¿Cuál es el código de patrocinador para registrarme?',
      a: `El código oficial de patrocinador de Yamilka Batista es: ${SITE_INFO.hgwSponsorCode}. Al ingresar a través de nuestro enlace oficial, el código se aplica automáticamente.`
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
            Atención Personalizada
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contáctame Directamente
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Estoy a tu disposición para asesorarte en la compra de productos HGW o para guiarte en tu proceso de afiliación internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-slate-200/80 hover:border-emerald-400 rounded-3xl shadow-xs hover:shadow-md transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">WhatsApp Directo</span>
                <p className="text-lg font-extrabold text-slate-900 mt-0.5">{SITE_INFO.phone}</p>
                <p className="text-xs text-slate-500 mt-1">Respuesta rápida todos los días para pedidos y consultas.</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="p-6 bg-white border border-slate-200/80 hover:border-emerald-400 rounded-3xl shadow-xs hover:shadow-md transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">Correo Electrónico</span>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">{SITE_INFO.email}</p>
                <p className="text-xs text-slate-500 mt-1">Para consultas corporativas o dudas sobre tu registro.</p>
              </div>
            </a>

            {/* Sponsor ID Card */}
            <div className="p-6 bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-3xl shadow-md">
              <div className="flex items-center gap-2 mb-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <UserPlus className="w-4 h-4" />
                <span>Patrocinador Oficial HGW</span>
              </div>
              <p className="text-2xl font-black text-white">{SITE_INFO.hgwSponsorCode}</p>
              <p className="text-xs text-emerald-100/80 mt-1">
                Utiliza este código al registrarte en la plataforma oficial de Health Green World para integrarte a mi equipo directo.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={SITE_INFO.hgwReferralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2.5 bg-white text-emerald-950 font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-50 transition-colors"
                >
                  Ir a Tienda Oficial HGW (Yamilka507)
                </a>
                <a
                  href={SITE_INFO.driveCatalogsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2 bg-emerald-950/70 border border-emerald-400/30 text-emerald-200 font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-900 transition-colors"
                >
                  Descargar Catálogos PDF (Google Drive)
                </a>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
              Envía tu Consulta a Yamilka
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Completa el formulario y te conectaremos instantáneamente por WhatsApp con tu mensaje preparado.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carmen Rodríguez"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+507 6000-0000"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    País o Ciudad
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Panamá / Colombia / etc."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Motivo de Consulta
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none font-medium text-slate-800"
                  >
                    <option value="Comprar productos HGW">Comprar productos HGW</option>
                    <option value="Afiliarme como socio / distribuidor">Afiliarme como socio / distribuidor</option>
                    <option value="Información sobre Cafés Saludables">Información sobre Cafés Saludables</option>
                    <option value="Información sobre Turmalina y Cuidado Personal">Información sobre Turmalina</option>
                    <option value="Otro tema">Otro tema</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Mensaje o Productos de Interés
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe aquí tu consulta o los productos que deseas adquirir..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta por WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Se ha abierto WhatsApp con tu mensaje. Yamilka te responderá a la brevedad.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-6 text-emerald-800">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Preguntas Frecuentes (FAQ)
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className="border border-slate-200/80 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
