import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  Sparkles, 
  PhoneCall, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  UserPlus
} from 'lucide-react';
import { SITE_INFO } from '../data/siteInfo';

export const AboutView: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Avatar badge */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-teal-400 text-white flex items-center justify-center font-black text-4xl shadow-xl shadow-emerald-700/20 shrink-0">
              YB
            </div>

            <div className="flex-1 text-center sm:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Asesor Independiente Autorizado HGW</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {SITE_INFO.advisorName}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Dedicada a promover un estilo de vida saludable, preventivo y natural en Panamá y toda Latinoamérica a través de las tecnologías patentadas de Health Green World.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Panamá y Latinoamérica
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  {SITE_INFO.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  {SITE_INFO.phone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story & Mission Content */}
        <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Heart className="w-6 h-6 text-rose-500" />
              <span>Mi Misión de Bienestar</span>
            </h2>
            <p>
              Como Asesor Independiente de <strong>Health Green World (HGW)</strong>, mi propósito fundamental es poner al alcance de las familias alternativas de nutrición e higiene de calidad superior basadas en ingredientes naturales científicamente probados.
            </p>
            <p>
              Creo firmemente que la salud comienza con pequeños hábitos cotidianos: desde el café que tomamos cada mañana para activarnos, hasta la pasta dental que utilizamos diariamente libre de químicos agresivos como el flúor y el triclosán.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <span>Acerca de Health Green World (HGW)</span>
            </h2>
            <p>
              <strong>Health Green World</strong> es una corporación internacional con décadas de trayectoria e investigación botánica y biomédica. Fundada con el respaldo de científicos especializados en biotecnología vegetal y mineral, HGW combina la sabiduría milenaria de la medicina tradicional oriental con los más rigurosos estándares de manufactura moderna.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Tecnología de Nanoturmalina</h4>
                <p className="text-xs text-slate-600">
                  Aprovechamiento de minerales naturales generadores de aniones e infrarrojo lejano para el cuidado bucal, cervical, lumbar y articular.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Superalimentos & Adaptógenos</h4>
                <p className="text-xs text-slate-600">
                  Formulaciones puras a base de Ganoderma lucidum, Cordyceps sinensis, Ashwagandha y arándanos ricos en antocianinas.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Affiliation CTA */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">¿Tienes preguntas o deseas afiliarte?</h3>
              <p className="text-sm text-emerald-100 max-w-lg">
                Estoy disponible para atenderte personalmente por WhatsApp y brindarte la mejor orientación sobre los productos o el plan de negocio HGW.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 shrink-0 w-full sm:w-auto">
              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <UserPlus className="w-4 h-4" />
                <span>Comprar / Afiliarse en HGW Oficial</span>
              </a>

              <a
                href={SITE_INFO.driveCatalogsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <span>Descargar Catálogos PDF (Drive)</span>
              </a>

              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-emerald-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 underline underline-offset-4"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp: {SITE_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
