import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

export const DialogContactUs = () => (
  <Dialog.Root
    onOpenChange={(open: boolean) => {
      if (open) {
        document.body.style.marginRight = '0px !important';
        // document.documentElement.style.setProperty('overflow', 'hidden');
      } else {
        document.body.style.marginRight = '0px !important';
        // document.documentElement.style.setProperty('overflow', 'auto');
      }
    }}
  >
    <Dialog.Trigger asChild>
      <Button
        radius="full"
        color="indigo"
        size={'3'}
        style={{ cursor: 'pointer' }}
      >
        Kontakta oss
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent" style={{}}>
        <Dialog.Title className="DialogTitle">Kontakta oss</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Välkommen att kontakta oss för alla typer av förfrågningar. Vi
          återkommer så snart som möjligt.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Namn
          </label>
          <input className="Input" id="name" placeholder="Your name" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">
            E-mail
          </label>
          <input className="Input" id="email" placeholder="email@example.com" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="subject">
            Rubrik
          </label>
          <input className="Input" id="subject" placeholder="Inquiry" />
        </fieldset>
        <fieldset className="Fieldset" style={{ alignItems: 'flex-start' }}>
          <label className="Label" htmlFor="username">
            Meddelande
          </label>
          <textarea
            className="Input"
            name=""
            id=""
            rows={10}
            placeholder="Your message"
            style={{ flex: 1, padding: 10, fontSize: 14 }}
          />
        </fieldset>
        <div
          style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}
        >
          <Dialog.Close asChild>
            <button className="Button indigo">Skicka</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
