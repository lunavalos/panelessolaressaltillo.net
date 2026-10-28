"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#1C203D] text-white border border-white/15 rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0B0E1D]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#2E71F2]" />
            <h2
              id="privacy-modal-title"
              className="text-base sm:text-lg font-bold uppercase tracking-tight text-white"
            >
              Aviso de Privacidad
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar aviso de privacidad"
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
          <p>
            De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su reglamento, <strong>Paneles Solares Saltillo</strong>, con domicilio en <strong>Saltillo, Coahuila, México</strong>, declara ser una empresa legalmente constituida de conformidad con las leyes mexicanas y ser responsable del tratamiento de sus datos personales, haciendo de su conocimiento lo siguiente:
          </p>

          <div>
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-[#2E71F2] mb-1.5">
              1. Datos personales recopilados
            </h3>
            <p>La Empresa recaba y trata los siguientes datos personales de sus clientes:</p>
            <ul className="list-disc pl-5 mt-1.5 space-y-1 text-white/80">
              <li>Nombre completo.</li>
              <li>Dirección.</li>
              <li>Teléfonos de hogar, oficina y móviles.</li>
              <li>Correo electrónico.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-[#2E71F2] mb-1.5">
              2. Finalidades del tratamiento de datos
            </h3>
            <p>Los datos personales mencionados anteriormente son utilizados exclusivamente para los siguientes fines:</p>
            <ul className="list-disc pl-5 mt-1.5 space-y-1 text-white/80">
              <li>Información y prestación de servicios.</li>
              <li>Actualización de la base de datos.</li>
              <li>Cualquier finalidad análoga o compatible con las anteriores.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-[#2E71F2] mb-1.5">
              3. Confidencialidad y seguridad de los datos
            </h3>
            <p>
              La Empresa trata los datos personales de sus clientes de forma estrictamente confidencial y ha implementado las medidas de seguridad necesarias para proteger dichos datos contra el acceso no autorizado, la divulgación, alteración o destrucción.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-[#2E71F2] mb-1.5">
              4. Transferencia de datos
            </h3>
            <p>
              La Empresa no transfiere los datos personales de sus clientes a terceros, salvo que sea necesario para cumplir con las finalidades descritas en el apartado 2, siempre y cuando dichos terceros se comprometan a respetar este Aviso de Privacidad y se implementen las medidas de seguridad correspondientes.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-[#2E71F2] mb-1.5">
              5. Derechos ARCO
            </h3>
            <p>
              Los clientes tienen derecho de acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (derechos ARCO), así como de revocar el consentimiento otorgado para el tratamiento de los mismos. Estos derechos pueden ser ejercidos mediante una solicitud por escrito dirigida al Área de Privacidad de la Empresa, a través de los siguientes medios de contacto:
            </p>
            <ul className="list-disc pl-5 mt-1.5 space-y-1 text-white/80">
              <li>
                Teléfono:{" "}
                <a href="tel:8443929525" className="text-[#2E71F2] hover:underline font-semibold">
                  844-392-9525
                </a>
              </li>
              <li>
                Correo electrónico:{" "}
                <a
                  href="mailto:contacto@panelessolaressaltillo.net"
                  className="text-[#2E71F2] hover:underline font-semibold"
                >
                  contacto@panelessolaressaltillo.net
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-[#2E71F2] mb-1.5">
              6. Actualización de datos y preferencias de comunicación
            </h3>
            <p>
              Los clientes pueden actualizar sus datos personales y especificar el medio por el cual desean recibir información de la Empresa. En caso de no contar con esta especificación, la Empresa establecerá libremente el canal que considere pertinente para enviar información.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-[#2E71F2] mb-1.5">
              7. Modificaciones al aviso de privacidad
            </h3>
            <p>
              La Empresa se reserva el derecho de efectuar modificaciones o actualizaciones al presente aviso de privacidad. Cualquier modificación se comunicará oportunamente a través de los medios de contacto proporcionados por el cliente.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 text-left">
            <p className="font-semibold text-white/90 uppercase tracking-wider text-xs">
              ATENTAMENTE
            </p>
            <p className="font-bold text-sm sm:text-base text-[#2E71F2] mt-0.5">
              Paneles Solares Saltillo
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0B0E1D] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-[#2E71F2] hover:bg-[#2E71F2]/90 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition-colors cursor-pointer"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
