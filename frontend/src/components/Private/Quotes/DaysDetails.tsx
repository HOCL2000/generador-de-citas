import { UseAdminStore } from "@/store/adminStore"
import { AnimatePresence, motion } from "framer-motion"
import DetailsEnabledDays from "./DetailsEnabledDays"
import GenerateNewDate from "./GenerateNewDate"

const DaysDetails = () => {
    const stateDay = UseAdminStore(state=> state.stateOfDay)
    
    return (
        <section className="flex w-full  flex-col items-start " >
            <AnimatePresence mode="wait">
            <motion.div
            key={stateDay}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full">
            {
                stateDay === 'enabled' &&
                <DetailsEnabledDays/>
            }

            {
                stateDay === 'disabled' &&

                <>
                    días deshabilitados
                </>
            }

            {
                stateDay === null &&
                <>
                    <GenerateNewDate/>
                </>
            }
            </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default DaysDetails