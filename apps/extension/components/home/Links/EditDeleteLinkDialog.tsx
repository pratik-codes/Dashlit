import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

const EditDeleteLinkDialog = ({ isOpen, closeModal, link }: any) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent aria-describedby={link.title}>
        <DialogHeader>
          <DialogTitle>Edit Link</DialogTitle>
        </DialogHeader>
        <p>Editing: {link.title}</p>
        <DialogFooter>
          <Button onClick={closeModal}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditDeleteLinkDialog;
