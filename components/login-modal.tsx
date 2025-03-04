"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showError, setShowError] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowError(true)
  }

  const handleClose = () => {
    setShowError(false)
    setEmail("")
    setPassword("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Clientes</DialogTitle>
          <DialogDescription>Accede con tu cuenta asignada para gestionar tus servicios y ver el progreso de los mismos.</DialogDescription>
        </DialogHeader>
        {showError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Usuario no registrado. Por favor, verifica tus credenciales o comunicate con el soporte.
            </AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="*************"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>
          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>
          </DialogFooter>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          <p>
            ¿No recuerdas tu contraseña?{" "}
            <Button variant="link" className="p-0 h-auto">
              Contacta a soporte
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
