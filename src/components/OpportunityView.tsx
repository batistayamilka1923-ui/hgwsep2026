import React from 'react';
import { 
  UserPlus, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight,
  Globe,
  DollarSign,
  Gift
} from 'lucide-react';
import { SITE_INFO } from '../data/siteInfo';

export const OpportunityView: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
            Membresía & Emprendimiento
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Únete a Health Green World con{' '}
            <span className="text-emerald-700">Yamilka Batista</span>
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Forma parte de la red de bienestar de mayor crecimiento en Latinoamérica. Disfruta de un 30% a 50% de descuento en tus compras personales y genera ingresos comercializando productos de alta demanda.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={SITE_INFO.hgwReferralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Registrarse Ahora (Patrocinador: {SITE_INFO.hgwSponsorCode})</span>
            </a>

            <a
              href={SITE_INFO.driveCatalogsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 font-bold text-sm rounded-xl shadow-2xs transition-all flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Ver Catálogos Oficiales (Google Drive)</span>
            </a>

            <a
              href={`${SITE_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Yamilka Indira Batista Aguila, deseo asesoría para afiliarme a HGW con código Yamilka507 y aprovechar el 30% de descuento al activarme.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-slate-900 text-white hover:bg-slate-800 font-bold text-sm rounded-xl shadow-2xs transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {SITE_INFO.phone}</span>
            </a>
          </div>

          {/* Countries & Price Variation Note */}
          <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-left text-xs space-y-1.5 max-w-2xl mx-auto shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-emerald-950">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Descuento del 30% al activarse</span>
            </div>
            <p className="text-slate-700">
              <strong>Países disponibles HGW:</strong> {SITE_INFO.availableCountries.join(', ')}.
            </p>
            <p className="text-emerald-900 font-semibold">
              {SITE_INFO.priceNote}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 font-bold">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Descuentos de 30% a 50%</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Desde tu registro y activación accedes al precio oficial de socio en toda la gama de cafés saludables, turmalina, arándanos y suplementos.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Plan de Ganancia Mutua</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Un sistema revolucionario patentado donde el patrocinador y patrocinado comparten bonificaciones en un 50/50, fomentando trabajo en equipo real.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Negocio Internacional</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Expande tu equipo en Panamá, Colombia, Perú, México, Ecuador, Bolivia, Chile y más de 40 países con tu mismo código de socio internacional.
            </p>
          </div>

        </div>

        {/* 4 Membership Tiers */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Paquetes de Afiliación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Elige Tu Nivel de Inicio en HGW
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Inviertes únicamente en productos que tú mismo seleccionas a tu gusto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pre-Junior */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Nivel 1</span>
                <h3 className="font-extrabold text-xl text-slate-900 mt-1">Pre-Junior</h3>
                <p className="text-2xl font-black text-slate-900 mt-3">50 BV</p>
                <p className="text-xs text-slate-500 mt-1">En productos de tu elección según tu país</p>
                
                <ul className="mt-5 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Código oficial HGW</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 30% desc. en recompras</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bono de patrocinio</li>
                </ul>
              </div>

              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl text-center transition-colors"
              >
                Elegir Pre-Junior
              </a>
            </div>

            {/* Junior */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Nivel 2</span>
                <h3 className="font-extrabold text-xl text-slate-900 mt-1">Junior</h3>
                <p className="text-2xl font-black text-slate-900 mt-3">100 BV</p>
                <p className="text-xs text-slate-500 mt-1">En productos de tu elección según tu país</p>
                
                <ul className="mt-5 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mayor porcentaje en bonos</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 35% desc. en recompras</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Acceso a red de equipo</li>
                </ul>
              </div>

              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl text-center transition-colors"
              >
                Elegir Junior
              </a>
            </div>

            {/* Senior */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Nivel 3</span>
                <h3 className="font-extrabold text-xl text-slate-900 mt-1">Senior</h3>
                <p className="text-2xl font-black text-slate-900 mt-3">300 BV</p>
                <p className="text-xs text-slate-500 mt-1">En productos de tu elección según tu país</p>
                
                <ul className="mt-5 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 40% desc. en recompras</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bonos acelerados</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Stock surtido para venta</li>
                </ul>
              </div>

              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl text-center transition-colors"
              >
                Elegir Senior
              </a>
            </div>

            {/* Master */}
            <div className="p-6 rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 flex flex-col justify-between relative shadow-md">
              <span className="absolute -top-3 right-4 bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">
                Más Recomendado
              </span>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Nivel 4</span>
                <h3 className="font-extrabold text-xl text-slate-900 mt-1">Master</h3>
                <p className="text-2xl font-black text-emerald-800 mt-3">600 BV</p>
                <p className="text-xs text-slate-500 mt-1">En productos de tu elección según tu país</p>
                
                <ul className="mt-5 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 50% desc. en recompras</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Máximas comisiones de red</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Calificación a viajes y premios</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mentoría VIP con Yamilka</li>
                </ul>
              </div>

              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center transition-colors shadow-sm"
              >
                Iniciar como Master
              </a>
            </div>

          </div>
        </div>

        {/* Step-by-Step Registration Guide */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Cómo registrarte paso a paso?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1">
              Es muy sencillo y solo te tomará 2 minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-700 text-emerald-200 font-black text-xl flex items-center justify-center mx-auto">
                1
              </div>
              <h4 className="font-bold text-base text-white">Ingresa al Enlace Oficial</h4>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Haz clic en el botón de registro para abrir la plataforma internacional HGW con el código de patrocinador <strong>Yamilka507</strong>.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-700 text-emerald-200 font-black text-xl flex items-center justify-center mx-auto">
                2
              </div>
              <h4 className="font-bold text-base text-white">Completa tus Datos</h4>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Selecciona tu país (Panamá u otro de Latinoamérica), llena tu nombre, identificación y dirección de entrega.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-700 text-emerald-200 font-black text-xl flex items-center justify-center mx-auto">
                3
              </div>
              <h4 className="font-bold text-base text-white">Elige tus Productos</h4>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Selecciona los productos HGW que deseas para tu activación y comunícate con Yamilka para recibir tu plan de bienvenida.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-emerald-800 text-center">
            <a
              href={SITE_INFO.hgwReferralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <UserPlus className="w-4 h-4" />
              <span>Crear mi Cuenta de Socio HGW Ahora</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
