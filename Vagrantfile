$init = <<SCRIPT
sudo /home/vagrant/android-sdk-linux/platform-tools/adb kill-server
sudo /home/vagrant/android-sdk-linux/platform-tools/adb start-server
sudo /home/vagrant/android-sdk-linux/platform-tools/adb devices
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "banzai-mobile-shell"

  config.vm.provision :shell, path: "sh/core.sh"  
  config.vm.provision :shell, path: "sh/ionic.sh"
  config.vm.provision :shell, path: "sh/nvm.sh", privileged: false
  config.vm.provision :shell, run: "always", inline: $init

  # ionic
  config.vm.network "forwarded_port", guest: 8100, host: 8100
  # livereload
  config.vm.network "forwarded_port", guest: 35729, host: 35729

  config.vm.box_check_update = false
  config.vm.synced_folder '.', '/vagrant', disabled: true
  config.vm.synced_folder ".", "/home/vagrant/banzai-mobile-shell", create: true, group: "vagrant", owner: "vagrant",
  type: "rsync",
  rsync__exclude:  [".git/", "node_modules/", ".vagrant"],
  rsync__args: ["--verbose", "--archive", "--delete", "-z", "--chmod=ugo=rwX"]

  # Configure VM settings for server running in VirtualBox
  config.vm.provider "virtualbox" do |vb|
        vb.gui = false
        # Need This If On Windows
        vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
        vb.customize ["modifyvm", :id, "--usb", "on"]
        vb.customize ["usbfilter", "add", "0", "--target", :id, "--name", "android", "--vendorid", "0x18d1"]
        vb.customize ["usbfilter", "add", "0", "--target", :id, "--name", "androidSamsung", "--vendorid", "0x04e8"]
        vb.name = "banzai-mobile-shell"
        vb.memory = 4096
        vb.cpus = 2
  end
end