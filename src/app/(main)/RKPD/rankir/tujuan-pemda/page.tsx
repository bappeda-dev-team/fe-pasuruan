'use client'

import { FiHome } from "react-icons/fi";
import Maintenance from "@/components/global/Maintenance";
import { useBrandingContext } from "@/context/BrandingContext";

<<<<<<<< HEAD:src/app/RKPD/ranwal/iku-pemda/page.tsx
const RKPDRanwalIkuPage = () => {

    const {branding} = useBrandingContext();
========
const RKPDRankirTujuanPage = () => {
>>>>>>>> sumber/main:src/app/(main)/RKPD/rankir/tujuan-pemda/page.tsx

    const {branding} = useBrandingContext();
    
    return (
        <>
            <div className="flex items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan Pemda</p>
                <p className="mr-1">/ RKPD</p>
<<<<<<<< HEAD:src/app/RKPD/ranwal/iku-pemda/page.tsx
                <p className="mr-1">/ Ranwal</p>
                <p className="mr-1">/ Iku Pemda</p>
========
                <p className="mr-1">/ Rankir</p>
                <p className="mr-1">/ Tujuan Pemda</p>
>>>>>>>> sumber/main:src/app/(main)/RKPD/rankir/tujuan-pemda/page.tsx
            </div>
            <div className="mt-3 rounded-xl shadow-lg border">
                <div className="flex items-center justify-between border-b px-5 py-5">
                    <div className="flex flex-wrap items-end">
<<<<<<<< HEAD:src/app/RKPD/ranwal/iku-pemda/page.tsx
                        <h1 className="uppercase font-bold">RKPD Ranwal Iku Pemda</h1>
========
                        <h1 className="uppercase font-bold">RKPD Rankir Tujuan Pemda</h1>
>>>>>>>> sumber/main:src/app/(main)/RKPD/rankir/tujuan-pemda/page.tsx
                        <h1 className="uppercase font-bold ml-1">{branding?.tahun?.label || ""}</h1>
                    </div>
                </div>
                <Maintenance />
            </div>
        </>
    )
}

<<<<<<<< HEAD:src/app/RKPD/ranwal/iku-pemda/page.tsx
export default RKPDRanwalIkuPage;
========
export default RKPDRankirTujuanPage;
>>>>>>>> sumber/main:src/app/(main)/RKPD/rankir/tujuan-pemda/page.tsx
