import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import Svg from "./Svg"

const ModalComponent = (props: any) => {
  const { isOpen, children, onClose, title, footer, closeIcon, width, height } =
    props

  const CLOSE_ICON = closeIcon ? (
    closeIcon
  ) : (
    <Svg
      type="close"
      classNames="my-auto mt-5 rounded-md hover:bg-grey1 p-1 text-white"
    />

  )
  const FOOTER = footer ? footer : null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent style={{ width: `${width}px`, height: `${height}vh` }}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogClose asChild>{CLOSE_ICON}</DialogClose>
        </DialogHeader>
        <div className="py-4">{children}</div>
        {FOOTER && <DialogFooter>{FOOTER}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}

export default ModalComponent

