import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

export const DialogContactUs = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button
        radius="full"
        color="indigo"
        size={'3'}
        style={{ cursor: 'pointer' }}
      >
        Contact us
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Contact us</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          You are most welcome to contact us for any inquiries. We&apos;ll get
          back to you as soon as possible.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
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
            Subject
          </label>
          <input className="Input" id="subject" placeholder="Inquiry" />
        </fieldset>
        <fieldset className="Fieldset" style={{ alignItems: 'flex-start' }}>
          <label className="Label" htmlFor="username">
            Message
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
            <button className="Button indigo">Send</button>
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
